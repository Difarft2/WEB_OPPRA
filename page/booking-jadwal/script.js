function updateInputPembayaran() {
    const pilihan = document.getElementById('jenis-pembayaran').value;
    const wrapper = document.getElementById('input-tambahan-wrapper');
    const label = document.getElementById('label-tambahan');
    const input = document.getElementById('input-tambahan');

    if (pilihan === 'bpjs') {
        wrapper.style.display = 'flex';
        label.innerText = 'Masukan No. BPJS';
        input.placeholder = 'Contoh: 000123456789';
    } else if (pilihan === 'bank') {
        wrapper.style.display = 'flex';
        label.innerText = 'Masukan No. Rekening';
        input.placeholder = 'Contoh: 123-456-789 (Bank BCA)';
    } else if (pilihan === 'cash') {
        wrapper.style.display = 'none';
        input.value = '';
    }
    else{
        wrapper.style.display = 'none';
        input.value = '';
    }
}

document.getElementById('pilih-poli').addEventListener('change', function() {
    const poli = this.value;
    const selectDokter = document.getElementById('pilih-dokter'); 
    
    // Kosongkan pilihan dokter lama
    selectDokter.innerHTML = "";

    let options = "";

    if (poli === 'umum') {
        options = `
            <option>Dr. Stella Pravita Sp.PD | Senin - Kamis | 08.00 - 21.00</option>
            <option>Dr. Ahmad Fauzi | Jumat - Sabtu | 08.00 - 15.00</option>
        `;
    } else if (poli === 'kia-kb') {
        options = `
            <option>Dr. Siti Aminah Sp.OG | Senin & Rabu | 10.00 - 14.00</option>
            <option>Bidan Rina | Selasa & Kamis | 08.00 - 12.00</option>
        `;
    } else if (poli === 'gigi') {
        options = `
            <option>Drg. Budi Santoso | Senin - Jumat | 16.00 - 20.00</option>
            <option>Drg. Fitriani | Sabtu | 09.00 - 13.00</option>
        `;
    } else if (poli === 'syaraf') {
        options = `
            <option>Dr. Hendra Sp.S | Selasa & Kamis | 13.00 - 17.00</option>
        `;
    } else if (poli === 'anak') {
        options = `
            <option>Dr. Dewi Sp.A | Senin - Jumat | 08.00 - 12.00</option>
            <option>Dr. Kevin Sp.A | Senin - Rabu | 17.00 - 20.00</option>
        `;
    } else if (poli === 'gastro') {
        options = `
            <option>Dr. Lukman Sp.PD-KGEH | Rabu | 10.00 - 13.00</option>
        `;
    } else if (poli === 'endokrin') {
        options = `
            <option>Dr. Sari Sp.PD-KEMD | Jumat | 14.00 - 17.00</option>
        `;
    } else if (poli === 'jantung') {
        options = `
            <option>Dr. Yusuf Sp.JP | Senin & Kamis | 09.00 - 12.00</option>
        `;
    } else if (poli === 'mata') {
        options = `
            <option>Dr. Andi Sp.M | Senin & Selasa | 09.00 - 12.00</option>
            <option>Dr. Riana Sp.M | Kamis | 13.00 - 16.00</option>
        `;
    }

    selectDokter.innerHTML = options;
});

document.addEventListener('DOMContentLoaded', function() {
    const poliSelect = document.getElementById('pilih-poli');
    if (poliSelect) {
        const event = new Event('change');
        poliSelect.dispatchEvent(event);
    }
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah halaman reload
    
    // Tampilkan popup
    document.getElementById('popup-success').style.display = 'flex';
});

function closePopup() {
    document.getElementById('popup-success').style.display = 'none';
    
    // Opsional: Reset form setelah sukses
    document.querySelector('form').reset();
    // Jalankan kembali update dokter agar kembali ke default (Umum)
    document.getElementById('pilih-poli').dispatchEvent(new Event('change'));
}