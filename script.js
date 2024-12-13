// Data Penyakit
const dataPenyakit = [
  {
    nama: "Flu",
    gejala: ["demam", "batuk", "pilek"],
    saran: "Istirahat yang cukup dan minum vitamin.",
  },
  {
    nama: "Demam Berdarah",
    gejala: ["demam tinggi", "bintik merah", "mual"],
    saran: "Segera periksakan ke dokter.",
  },
  {
    nama: "COVID-19",
    gejala: ["demam", "batuk", "sesak napas"],
    saran: "Isolasi mandiri dan konsultasi ke dokter.",
  },
];

// Logika Diagnosis
document
  .getElementById("diagnosis-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const gejalaInput = document
      .getElementById("gejala")
      .value.toLowerCase()
      .split(",")
      .map((g) => g.trim());
    const hasilElement = document.getElementById("hasil");
    const diagnosisElement = document.getElementById("diagnosis");

    // Mencari penyakit berdasarkan gejala
    const hasilDiagnosis = dataPenyakit.find((penyakit) =>
      gejalaInput.every((gejala) => penyakit.gejala.includes(gejala))
    );

    // Menampilkan hasil
    if (hasilDiagnosis) {
      diagnosisElement.innerHTML = `
            <strong>Penyakit:</strong> ${hasilDiagnosis.nama} <br>
            <strong>Saran:</strong> ${hasilDiagnosis.saran}
        `;
    } else {
      diagnosisElement.textContent =
        "Gejala tidak dikenali. Silakan konsultasikan dengan dokter.";
    }

    hasilElement.classList.remove("hidden");
  });
