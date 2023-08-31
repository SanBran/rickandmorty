export const expresions = {
  name: /^[a-zA-Z]+( [a-zA-Z]+)+$/,
  email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.])[A-Za-z\d$@$!%*?&#.]{8,15}$/, //contrasena debe tener entre 8-15 caract., minus, mayus, num y caract especial [$@$!%*?&#.] cualquier a de los que estan dentro de los corchetes
};
