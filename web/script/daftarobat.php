<div class="container">
	<h1>Daftar obat</h1>

<table>
    <thead class="tablehead">
      <tr>
	<th>Nama Obat</th>
	<th>Stok</th>
      </tr>
    </thead>
    <?php 
	include "script/dbsambung.php";
    $sql="select * from obatalkes_m ORDER BY obatalkes_nama ASC ";
	$hasil=mysqli_query($db,$sql);
	$no=0;
	while ($data = mysqli_fetch_array($hasil)) {
	$no++;
	?>
	<tbody class="tablebody">
           <tr> 
		<td class="text-left tabeldaftarobat"><a>
		<?php echo $data["obatalkes_nama"];   ?></a></td> 
		<td class="text-right tabeldaftarobat"><?php echo number_format($data["stok"],0,",",".");   ?></td> 
           </tr>
       </tbody>  
	<?php 
	}
	?>		    
</table>
</div>