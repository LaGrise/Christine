import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/ueber", (req, res) => {
  res.render("ueber.ejs");
});

app.get("/physiotherapie", (req, res) => {
  res.render("physiotherapie.ejs");
});

app.get("/laufbahntherapien", (req, res) => {
  res.render("laufbahntherapien.ejs");
});

app.get("/unterwasserlaufband", (req, res) => {
  res.render("unterwasserlaufband.ejs");
});

app.get("/tierakupunktur", (req, res) => {
  res.render("tierakupunktur.ejs");
});

app.get("/kinesiologie-bei-tieren", (req, res) => {
  res.render("kinesiologie-bei-tieren.ejs");
});

app.get("/tierosteopathie", (req, res) => {
  res.render("tierosteopathie.ejs");
});
app.get("/links", (req, res) => {
  res.render("links.ejs");
});

app.get("/kontakt", (req, res) => {
  res.render("kontakt.ejs");
}); 

app.get("/impressum", (req, res) => {
  res.render("impressum.ejs");
}); 

app.get("/honorar", (req, res) => {
  res.render("honorar.ejs");
}); 

app.get("/rechtliche-hinweise", (req, res) => {
  res.render("rechtliche_hinweise.ejs");
}); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
