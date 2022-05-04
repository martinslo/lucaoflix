const MAX_TRIES = 3;
let tries = 0;

const fakeUserDb = [
  { id: "1", email: "lucao@lucasflix.com.br", password: "123456" },
  { id: "2", email: "fredes@lucasflix.com.br", password: "123456" },
]

export const login = async (email, password) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  tries++;

  if (tries > MAX_TRIES) {
    return { error: "Tentativas excedidas! Entre em contato com o Lucão para recuperar a sua senha" };
  }

  if (!email || !password) {
    return { error: "Preencha todos os campos" };
  }
  const user = fakeUserDb.find(user => user.email === email);
  if (!user) {
    return { error: "Usuário ou Senha incorretos" };
  }
  if (user.password !== password) {
    return { error: "Usuário ou Senha incorretos" };
  }
  return { user };
};