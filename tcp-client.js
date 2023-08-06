console.log("Hello ! TCP of Client");

// TCP istemci oluşturma

const net = require("net");

const client = net.createConnection({ port: 2020 }, () => {
  setTimeout(() => {
    console.log("Sunucuya bağlandı. TCP Servera Bağlandı");

    // Sunucuya veri gönderme
    client.write("Merhaba TCP sunucusu,ben Client-Mehmet, buradayım!");
  }, 2000);
});

setTimeout(() => {
  client.on("data", (data) => {
    console.log("Sunucudan gelen yanıt:", data.toString());
    client.end(); // İstemci bağlantısını sonlandırma
  });
}, 9000);

setTimeout(() => {
  client.on("end", () => {
    console.log("Bağlantı kapatıldı.");
  });
}, 2000);

client.on("error", (err) => {
  console.error("Bir hata oluştu:", err);
});
