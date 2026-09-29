const { tienePermiso } = require("../src/permisos");

test("debe permitir el acceso a un usuario con rol permitido", () => {
  // Arrange
  const rolUsuario = "staff";
  const rolesPermitidos = ["staff"];

  // Act
  const resultado = tienePermiso(rolUsuario, rolesPermitidos);

  // Assert
  expect(resultado).toBe(true);
});

test("debe rechazar el acceso a un usuario con rol no permitido", () => {
  // Arrange
  const rolUsuario = "profesor";
  const rolesPermitidos = ["staff"];

  // Act
  const resultado = tienePermiso(rolUsuario, rolesPermitidos);

  // Assert
  expect(resultado).toBe(false);
});

test("debe permitir el acceso cuando no hay roles restringidos", () => {
  // Arrange
  const rolUsuario = "profesor";
  const rolesPermitidos = [];

  // Act
  const resultado = tienePermiso(rolUsuario, rolesPermitidos);

  // Assert
  expect(resultado).toBe(true);
});
