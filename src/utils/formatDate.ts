export const formatDateToMMDDYY = (isoDate: string): string => {
    const date = new Date(isoDate);
    
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yy = String(date.getFullYear()).slice(-2);
  
    return `${mm}/${dd}/${yy}`;
};