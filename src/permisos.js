function tienePermiso(rolUsuario, rolesPermitidos) {
  return rolesPermitidos.length === 0 || rolesPermitidos.includes(rolUsuario);
}

module.exports = { tienePermiso };
