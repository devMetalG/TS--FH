import express from "express";
// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(401).json({
    ok: false,
    msg: 'There is not token in the request.'
  })
  // res.json({
  //   ok: true,
  //   msg: 'All went good!.'
  // })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})