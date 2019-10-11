const router = require("express").Router();
const DB = require("./orders-model");
router.get("/", (req, res) => {
  DB.findAll()
    .then(p => {
      res.status(200).json({ message: "SUCCESS", ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  DB.findAllById(id)
    .then(p => {
      res.status(200).json({ message: "SUCCESS", ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});

router.post("/", (req, res) => {
  const { body } = req;
  DB.add(body)
    .then(p => {
      res.status(201).json({ message: "SUCCESS", ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  Promise.then(p => {
    res.status(200).json({ message: "SUCCESS", ...p });
  }).catch(e => {
    res.status(404).json({ message: "SOMEMESSAGE", ...e });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  DB.remove(id)
    .then(p => {
      res.status(201).json({ message: "SUCCESS", ...p });
    })
    .catch(e => {
      res.status(404).json({ message: "SOMEMESSAGE", ...e });
    });
});

module.exports = router;
