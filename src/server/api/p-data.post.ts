import { H3Event, readBody } from "h3"

export default defineEventHandler(async (event: H3Event) => { 

  const body = await readBody(event)
  console.log("body", body)
  const url = `https://script.google.com/macros/s/AKfycbxMAx8GD8Ak8MwI-0L0prHDSNZyHdKhwJntyRSfAZxZtgB-HAIVv115kIhGZTSXkBtjLA/exec`
  const response = await fetch(url, {
    method: "POST", 
    mode: "cors",
    redirect: "follow",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(body),  
  });

  let data: any

  try {
    data = await response.json();
  } catch (error: any) {
    console.log(error.message)
  }  
  return data
})