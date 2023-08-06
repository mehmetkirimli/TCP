console.log("Hello ! TCP of Server");

// TCP sunucusunu oluşturma
// TCP sunucusu, istemcilerin bağlanmasını ve veri alışverişi yapmasını sağlar.

const net = require("net");

const server = net.createServer((socket) => {
  console.log("Bir istemci bağlandı.");

  socket.on("data", (data) => {
    console.log("Alınan veri: " + data.toString());

    // İstemciye yanıt gönderme
    socket.write("Merhaba istemci, veriyi aldım. Teşekkürler!");
  });

  socket.on("end", () => {
    console.log("İstemci bağlantısı sonlandı.");
  });

  socket.on("error", (err) => {
    console.log("Bir hata oluştu:", err);
  });
});

const PORT = 2020; // burada girilen portu , clientte girilecek
server.listen(PORT, () => {
  console.log("TCP sunucusu dinleniyor : ", PORT);
});
