export const validateCPF = (cpf: string) => {
  if (/^(\d)\1+$/.test(cpf)) return false;
  let add = 0;
  for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(9))) return false;
  add = 0;
  for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(10))) return false;
  return true;
};

export const validateCNPJ = (cnpj: string) => {
  if (/^(\d)\1+$/.test(cnpj)) return false;
  const t = cnpj.length - 2;
  const d = cnpj.substring(t);
  const d1 = parseInt(d.charAt(0));
  const d2 = parseInt(d.charAt(1));
  const calc = (x: number) => {
    const n: any = cnpj.substring(0, x);
    let y = x - 7;
    let s = 0;
    let r = 0;
    for (let i = x; i >= 1; i--) {
      s += n.charAt(x - i) * y--;
      if (y < 2) y = 9;
    }

    r = 11 - (s % 11);
    return r > 9 ? 0 : r;
  };

  return calc(t) === d1 && calc(t + 1) === d2;
};

export const validateFileSize = (file: File, maxSize: number): boolean => {
  if (!file) {
    return true;
  }
  const size = file.size / 1024 / 1024;
  return !(size > maxSize);
};

export const validateFileType = (file: File, fileTypes: string[]): boolean => {
  if (!file) {
    return true;
  }
  return fileTypes.includes(file.type);
};
