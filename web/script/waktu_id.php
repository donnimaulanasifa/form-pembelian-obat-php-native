<?php
date_default_timezone_set('Asia/Jakarta');
function kalender_indonesia($tgl, $dengan_hari = false)
{
	$hari = array ( 1 =>    'Senin',
				'Selasa',
				'Rabu',
				'Kamis',
				'Jumat',
				'Sabtu',
				'Minggu'
			);
			
	$bln = array (1 =>   'Januari',
				'Februari',
				'Maret',
				'April',
				'Mei',
				'Juni',
				'Juli',
				'Agustus',
				'September',
				'Oktober',
				'November',
				'Desember'
			);
	$bagian 	  = explode('-', $tgl);
	$print_kalender = $bagian[2] . ' ' . $bln[ (int)$bagian[1] ] . ' ' . $bagian[0];
	
	if ($dengan_hari) {
		$sekarang = date('N', strtotime($tgl));
		return $hari[$sekarang] . ', ' . $print_kalender;
	}
	return $print_kalender;
}

$kalenderlengkap = kalender_indonesia(date('Y-m-d'), true);
$kalender = kalender_indonesia(date('Y-m-d'), false);
$waktu = date("H:i:s");