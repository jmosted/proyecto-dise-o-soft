import bcryptjs from 'bcryptjs';
const encryption = async (password)=> {
    return await bcryptjs.hash(password, 10);
}

const comparePassword = async (password, passwordHash)=> {
    return await bcryptjs.compare(password, passwordHash);
}

export const pwd = {
    encryption,
    comparePassword
}