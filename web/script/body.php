<div class="container">

<h1 class="mt-3">Formulir Pembelian Obat</h1>
<p class="text-center"><?php echo $kalenderlengkap ?></p>
<div id="jam"></div>

 <div class="text-left mb-2">
 <br><a><button type="button" class='noprint btn daftarobat' target="popup" onclick="window.open('daftarobat.php','Daftar Obat','width=600,height=400')">Lihat daftar obat dan stok</button></a><br>
    </div>
    <table class="obat1">
        <thead class="tablehead"><tr>
            <th class="novisible">ID</th>
            <th class="noprint">#</th>
            <th>No</th>
            <th>Nama Obat</th>
            <th>Signa</th>
            <th class="noprint">Stok</th>
            <th>Qty</th>
        </tr></thead>
        <tbody class="tablebody"><tr id="row_1">
            <td class="novisible"><input type='text' id='id_1' name='id[]' class='novisible form-control autocomplete_txt ui-autocomplete-input' autocomplete='off'/></td>
            <td class="noprint"><input type='checkbox' class='case'/></td>
            <td class="text-center"><span class="row_no">1.</span></td>
            <td><input type='text' id='namaobat_1' name='namaobat[]' class='form-control autocomplete_txt ui-autocomplete-input' autocomplete='off'/></td>
            <td><input type='text' id='signa_1' name='signa[]' class='form-control autocomplete_txt ui-autocomplete-input' autocomplete='off'/></td>
            <td class="rowqty noprint"><input type='text' id='stok_1' name='stok[]' class='text-right form-control autocomplete_txt ui-autocomplete-input' readonly/></td>
            <td class="rowqty"><input type='text' id='qty_1' name='qty[]' class='text-right form-control autocomplete_txt ui-autocomplete-input' autocomplete='off'/> </td>
        </tr>
    </table>

    <div class="noprint btn-container">
        <button type="button" class='btn pilih_semua' onclick="select_all()">Pilih semua</button>
        <button type="button" class='btn hapus'>- Hapus</button>
        <button type="button" class='btn tambah'>+ Tambah</button>
        <button type="button" id="obatracikadd" style="display:initial" class='btn tambahini'>+ Tambah obat racikan</button>
    </div>

<div class="obatracik" id="obatracik"></div>

    <div>
        <form class="noprint">
        <input type="checkbox" id="konfirmasi" name="sudahoke" onclick="verifikasi()"> Saya sudah mengisi formulir pembelian obat dengan benar
        <div id="validasi" style="display:block">
            <p>Tandai pernyataan diatas untuk menyimpan</p>
            <p class='kirimform bgmerah' >Simpan resep</p>
        </div>
        <div id="lanjutkan" style="display:none">
            <p>Terima kasih sudah mengisi form ini</p>
            <input type="submit" value="Simpan resep" onClick="window.print()" class='kirimform bgijo'>
        </div>
        </form>
    </div>
</div>