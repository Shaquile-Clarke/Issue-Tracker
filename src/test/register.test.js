export default async function testRegister() {
  const data = {
    firstName: "James    ",
    lastName: "   Carter   ",
    email: "jAmEs@gmail.Com",
    password: "ILIKEMILK",
    passwordRepeat: "ILIKEMILK",
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch("/api/auth/register", options);

  const reply = await response.json();
  console.log(reply);
}
