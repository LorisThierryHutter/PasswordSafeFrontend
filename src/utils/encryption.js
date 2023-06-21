import bcrypt from 'bcrypt'; // Install the 'bcrypt' package

const SALT_ROUNDS = 10;

// Example function for hashing a password
export const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  return hashedPassword;
};

// Example function for comparing a password with a hashed password
export const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};
