document.getElementById("calculateBtn").addEventListener("click", function () {
  // Penggunaan const pada persentase bobot dan batas kelulusan
  const bobot_tugas = 0.3;
  const bobot_UTS = 0.3;
  const bobot_UAS = 0.4;
  const batas_kelulusan = 70;

  // Penggunaan let pada variabel perhitungan
  let tugas = parseFloat(document.getElementById("tugas").value);
  let uts = parseFloat(document.getElementById("uts").value);
  let uas = parseFloat(document.getElementById("uas").value);

  // Validasi input (harus di antara 0 - 100 dan merupakan angka)
  if (isNaN(tugas) || isNaN(uts) || isNaN(uas) || tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
    alert("Warning : Tolong hanya masukkan angka 0 - 100 !!!");
    return;
  }

  // Perhitungan rata-rata tertimbang akhir
  let average_nilai = tugas * bobot_tugas + uts * bobot_UTS + uas * bobot_UAS;

  // Menentukan nilai huruf berdasarkan rata-rata tertimbang akhir (variabel average_nilai)
  let nilai_huruf;
  if (average_nilai >= 90) {
    nilai_huruf = "A";
  } else if (average_nilai >= 80) {
    nilai_huruf = "B";
  } else if (average_nilai >= 70) {
    nilai_huruf = "C";
  } else if (average_nilai >= 60) {
    nilai_huruf = "D";
  } else {
    nilai_huruf = "E";
  }

  // Menentukan status lulus/gagal
  const status_kelulusan = document.getElementById("status_kelulusan");
  if (average_nilai >= batas_kelulusan) {
    status_kelulusan.textContent = "Lulus";
    status_kelulusan.className = "lulus";
  } else {
    status_kelulusan.textContent = "Gagal";
    status_kelulusan.className = "gagal";
  }

  // Tampilkan hasil perhitungan
  document.getElementById("average_nilai").textContent = average_nilai;
  document.getElementById("nilai_huruf").textContent = nilai_huruf;
  document.getElementById("hasil_akhir").style.display = "block";
});
