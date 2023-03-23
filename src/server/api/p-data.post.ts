import { H3Event, readBody } from "h3"

export default defineEventHandler(async (event: H3Event) => { 

  const body = await readBody(event)
  console.log("body", body)
  const url = `https://script.google.com/macros/s/AKfycbwNMhE0g1kz3fb-KoTAfC4McOiC8ciQ-dYsYvI1M3gSYAlTvcbTIMpwPtJXJZBENVrVeA/exec`
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