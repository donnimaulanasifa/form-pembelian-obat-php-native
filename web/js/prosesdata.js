$(document).ready(function() {
  setInterval(timestamp, 1000);
});

function timestamp() {
  $.ajax({
      url: 'script/jam.php',
      success: function(data) {
          $('#jam').html(data);
      },
  });
}

$(document).ready(function() {
    $( "#namaobat_1" ).autocomplete({
      serviceUrl: "prosesdb1.php",   // Kode php untuk prosesing data
      dataType: "JSON",           // Tipe data JSON
      onSelect: function (suggestion) {
          $( "#namaobat_1" ).val(suggestion.obatalkes_nama);
          $( "#stok_1" ).val(suggestion.stok);
          $( "#id_1" ).val(suggestion.obatalkes_id);
      }
    });
    $( "#signa_1" ).autocomplete({
      serviceUrl: "prosesdb2.php",   // Kode php untuk prosesing data
      dataType: "JSON",           // Tipe data JSON
      onSelect: function (suggestion) {
          $( "#signa_1" ).val(suggestion.signa_nama);
      }
    });
  })

  $('.tambahini').click(function() {
    var obatracikadd = document.getElementById("obatracikadd");
    obatracikadd.style.display = "none";
    parseInt($(this).html()),
    tambahracik = "<br><div class='text-left mb-2 nama-racikan'><a class='text-racikan'></a><input type='text' id='namaracik_1' class='text-left w50' name='namaracik[]' placeholder='(isi nama racikan disini)'></div><table  class='noprint obat2'><thead class='tablehead'><tr><th class='novisible'>ID</th><th class='noprint'>#</th><th>No</th><th>Nama Obat</th><th>Signa</th><th class='noprint'>Stok</th><th>Qty</th></tr></thead><tbody class='tablebody'><tr id='rrow_1'><td class='novisible'><input type='text' id='rid_1' name='rid[]' class='novisible form-control autocomplete_txt ui-autocomplete-input' autocomplete='off'/></td><td class='noprint'><input type='checkbox' class='rcase'/></td><td><span class='rrow_no'>1.</span></td><td><input type='text' id='rnamaobat_1' name='rnamaobat[]' class='form-control autocomplete_txt ui-autocomplete-input' autocomplete='off'/></td><td><input type='text' id='rsigna_1' name='rsigna[]' class='form-control autocomplete_txt ui-autocomplete-input' autocomplete='off'/></td><td class='rowqty noprint'><input type='text' id='rstok_1' name='rstok[]' class='text-right form-control autocomplete_txt ui-autocomplete-input' readonly/></td><td class='rowqty'><input type='text' id='rqty_1' name='rqty[]' class='text-right form-control autocomplete_txt ui-autocomplete-input' autocomplete='off'/> </td></tr></table><div class='noprint btn-container'><button type='button' class='btn rpilih_semua' onclick='select_all()'>Pilih semua</button> <button type='button' class='btn rhapus'>- Hapus</button> <button type='button' class='btn rtambah'>+ Tambah</button> <button type='button' class='btn rhapusini'>- Hapus racikan ini</button> </div>"
    ;
    $('.obatracik').append(tambahracik);
    $( "#rnamaobat_1" ).autocomplete({
      serviceUrl: "prosesdb1.php",   // Kode php untuk prosesing data
      dataType: "JSON",           // Tipe data JSON
      onSelect: function (suggestion) {
          $( "#rnamaobat_1" ).val(suggestion.obatalkes_nama);
          $( "#rstok_1" ).val(suggestion.stok);
          $( "#rid_1" ).val(suggestion.obatalkes_id);
      }
    });
    $( "#rsigna_1" ).autocomplete({
      serviceUrl: "prosesdb2.php",   // Kode php untuk prosesing data
      dataType: "JSON",           // Tipe data JSON
      onSelect: function (suggestion) {
          $( "#rsigna_1" ).val(suggestion.signa_nama);
      }
    });
    var j=2;
$(".rtambah").on('click',function(){
    rtambahsatu();
});

function rtambahsatu() {
  var rrowCount = $('.rrow_no').length + 1;
  var rdata="<tr id='rrow_"+j+"'><td class='novisible'><input type='text' id='rid_"+rrowCount+"' name='id[]' class='novisible form-control autocomplete_txt ui-autocomplete-input' autocomplete='off'/></td><td class='noprint'><input type='checkbox' class='rcase'/></td><td><span class='rrow_no'>"+rrowCount+".</span></td>";rdata +="<td><input type='text' id='rnamaobat_"+rrowCount+"' name='rnamaobat[]' class='form-control autocomplete_txt ui-autocomplete-input' autocomplete='off'/></td><td><input type='text' id='rsigna_"+rrowCount+"' name='rsigna[]' class='form-control autocomplete_txt ui-autocomplete-input' autocomplete='off'/></td><td class='noprint rowqty'><input type='text' id='rstok_"+rrowCount+"' name='rstok[]' class='text-right form-control autocomplete_txt ui-autocomplete-input' readonly/></td><td class='rowqty'><input type='text' id='rqty_"+rrowCount+"' name='rqty[]' class='text-right form-control autocomplete_txt ui-autocomplete-input' autocomplete='off'/> </td></tr>";
  $('.obat2').append(rdata);
  $(document).ready(function() {
      $( "#rnamaobat_"+rrowCount+"" ).autocomplete({
        serviceUrl: "prosesdb1.php",   // Kode php untuk prosesing data
        dataType: "JSON",           // Tipe data JSON
        onSelect: function (suggestion) {
            $( "#rnamaobat_"+rrowCount+"" ).val(suggestion.obatalkes_nama);
            $( "#rstok_"+rrowCount+"" ).val(suggestion.stok);
            $( "#rid_"+rrowCount+"" ).val(suggestion.obatalkes_id);
        }
      });
      $( "#rsigna_"+rrowCount+"" ).autocomplete({
        serviceUrl: "prosesdb2.php",   // Kode php untuk prosesing data
        dataType: "JSON",           // Tipe data JSON
        onSelect: function (suggestion) {
            $( "#rsigna_"+rrowCount+"" ).val(suggestion.signa_nama);
        }
      });
    });
  j++;
}

$(".rhapus").on('click', function() {
  $('.rcase:checkbox:checked').parents("tr").remove();
  rchangeAllRowNo();
  if($('input[class=rcase]:checkbox').length == 0){ 
      rtambahsatu();
};
});

function rchangeAllRowNo() {
  $('.rrow_no').each((k,ele)=>{
      $(ele).html(k+1+'.')
  });
}

$(".rpilih_semua").on('click', function() {
  $('input[class=rcase]:checkbox').each(function(){ 
  $(this).prop("checked", true); 	
});
});

$('.rhapusini').click(function() {
  var obatracikadd = document.getElementById("obatracikadd");
  obatracikadd.style.display = "initial";
  var obatracikdel = document.getElementById('obatracik');
  while(obatracikdel.firstChild){
    obatracikdel.removeChild(obatracikdel.firstChild);
}
})

});

var i=2;
$(".tambah").on('click',function(){
    tambahsatu();
});

function tambahsatu() {
    var rowCount = $('.row_no').length + 1;
    var data="<tr id='row_"+i+"'><td class='novisible'><input type='text' id='id_"+rowCount+"' name='id[]' class='novisible form-control autocomplete_txt ui-autocomplete-input' autocomplete='off'/></td><td class='noprint'><input type='checkbox' class='case'/></td><td><span class='row_no'>"+rowCount+".</span></td>";data +="<td><input type='text' id='namaobat_"+rowCount+"' name='namaobat[]' class='namaobat form-control autocomplete_txt ui-autocomplete-input' autocomplete='off'/></td> <td><input type='text' id='signa_"+rowCount+"' name='signa[]' class='form-control autocomplete_txt ui-autocomplete-input' autocomplete='off'/></td><td class='noprint rowqty'><input type='text' id='stok_"+rowCount+"' name='stok[]' class='text-right form-control autocomplete_txt ui-autocomplete-input' readonly/></td><td  class='rowqty'><input type='text' id='qty_"+rowCount+"' name='qty[]' class='text-right form-control autocomplete_txt ui-autocomplete-input' autocomplete='off'/></td></tr>";
    $('.obat1').append(data);
    $(document).ready(function() {
        $( "#namaobat_"+rowCount+"" ).autocomplete({
          serviceUrl: "prosesdb1.php",   // Kode php untuk prosesing data
          dataType: "JSON",           // Tipe data JSON
          onSelect: function (suggestion) {
              $( "#namaobat_"+rowCount+"" ).val(suggestion.obatalkes_nama);
              $( "#stok_"+rowCount+"" ).val(suggestion.stok);
              $( "#id_"+rowCount+"" ).val(suggestion.obatalkes_id);
          }
        });
        $( "#signa_"+rowCount+"" ).autocomplete({
          serviceUrl: "prosesdb2.php",   // Kode php untuk prosesing data
          dataType: "JSON",           // Tipe data JSON
          onSelect: function (suggestion) {
              $( "#signa_"+rowCount+"" ).val(suggestion.signa_nama);
          }
        });
      });
    i++;
}

$(".hapus").on('click', function() {
    $('.case:checkbox:checked').parents("tr").remove();
    changeAllRowNo();
    if($('input[class=case]:checkbox').length == 0){ 
        tambahsatu();
	};
});

function changeAllRowNo() {
    $('.row_no').each((k,ele)=>{
        $(ele).html(k+1+'.')
    });
}

$(".pilih_semua").on('click', function() {
    $('input[class=case]:checkbox').each(function(){ 
		$(this).prop("checked", true); 	
	});
});

function select_all() {
	$('input[class=case]:checkbox').each(function(){ 
		if($('input[class=check_all]:checkbox:checked').length == 0){ 
			$(this).prop("checked", false); 
		} else {
			$(this).prop("checked", true); 
		} 
	});
}

function verifikasi() {
  var checkBox = document.getElementById("konfirmasi");
  var lanjutkan = document.getElementById("lanjutkan");
  var validasi = document.getElementById("validasi");
  if (checkBox.checked == true){
      lanjutkan.style.display = "block";
      validasi.style.display = "none";
  } else {
      lanjutkan.style.display = "none";
      validasi.style.display = "block";
  }
}