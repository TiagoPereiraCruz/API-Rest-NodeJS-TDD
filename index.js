function helloworld() {
  console.log('Hello World');
}

const saudacao = () => {
  const hora = new Date().getHours();
  if (hora <= 12) return 'Bom dia';
  if (hora <= 18) return 'Boa tarde';
  return 'Boa noite';
};

helloworld();
console.log(`A saudação do momento é ${saudacao()}`);
