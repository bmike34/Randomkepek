const folderId = "1BoqpgLVvWW0T1n4CZ11JcK4ABQKB7eVR";
const apiKey = "AIzaSyBjRektb6rKE1hjaAleN03217YVU3RjViQ";

fetch(`https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&key=${apiKey}`)
  .then(response => {
    console.log("Fetch response status:", response.status);
    return response.json();
  })
  .then(data => {
    console.log("API válasz:", data);
    const files = data.files;
    if (!files || files.length === 0) {
      document.body.innerHTML += "<p>Nincs elérhető kép.</p>";
      return;
    }

    const randomIndex = Math.floor(Math.random() * files.length);
    const fileId = files[randomIndex].id;
    const imageUrl = `https://drive.usercontent.google.com/download?id=${fileId}&export=view`;

    console.log("Kép URL:", imageUrl);

    const img = document.getElementById("randomImage");
    img.src = imageUrl;
  })
  .catch(error => {
    console.error("Hiba a képek lekérésekor:", error);
    document.body.innerHTML += "<p>Nem sikerült betölteni a képeket.</p>";
  });
