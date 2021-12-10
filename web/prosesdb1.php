<?php 
  header("Content-Type: application/json; charset=UTF-8");
  include 'script/dbsambung.php';
  
  if(isset($_GET["query"])){
    $key = "%".$_GET["query"]."%";
    $query1 = "SELECT obatalkes_id, obatalkes_nama, stok FROM obatalkes_m WHERE obatalkes_nama LIKE ? ORDER BY obatalkes_nama ASC LIMIT 10";
    $data1 = $db->prepare($query1);
    $data1->bind_param('s', $key);
    $data1->execute();
    $res1 = $data1->get_result();
    while ($row = $res1->fetch_assoc()) {
        $output1['suggestions'][] = [
            'value' => $row['obatalkes_nama'] . ' | Stok = ' . number_format($row["stok"],0,",","."),
            'obatalkes_nama'  => $row['obatalkes_nama'],
            'stok'  => number_format($row["stok"],0,",","."),
            'obatalkes_id' => $row['obatalkes_id']
        ];
    }

    if (! empty($output1)) {
        echo json_encode($output1);
    }
  }

