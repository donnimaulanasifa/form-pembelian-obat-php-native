<?php 
  header("Content-Type: application/json; charset=UTF-8");
  include 'script/dbsambung.php';
  
  if(isset($_GET["query"])){
    $key = "%".$_GET["query"]."%";
    $query2 = "SELECT * FROM signa_m WHERE signa_nama LIKE ? LIMIT 10";
    $data2 = $db->prepare($query2);
    $data2->bind_param('s', $key);
    $data2->execute();
    $res2 = $data2->get_result();

    while ($row = $res2->fetch_assoc()) {
        $output2['suggestions'][] = [
            'value' => $row['signa_nama'],
            'signa_nama'  => $row['signa_nama'],
        ];
    }

    if (! empty($output2)) {
        echo json_encode($output2);
    }
  }

