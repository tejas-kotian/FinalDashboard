export const allocationUtil = (arr,excludeID,addVal) => {
   
    const item = arr.filter( i => i.hasOwnProperty('val') && i.val > 0 && i.id !=excludeID);
    const total = item.reduce((total,item) => {
        return  total+parseInt(item.val)
    },0); 

    return total + (addVal != ''?addVal:0);
    

};

export const allocationUtilTotal=(arr) => {
    const item = arr.filter( i => i.hasOwnProperty('val') && i.val > 0);
    const total = item.reduce((total,item) => {
        return  total+parseInt(item.val)
    },0); 

    return total;
    
}

export const filterItems = (arr) => {
    const assestsWithValue =  arr.filter(e => e.hasOwnProperty('val') && e.val > 0);
     return assestsWithValue;
}

export const filterItemsPie =(assestsEntered) => {
      const assestforpie = filterItems(assestsEntered).map(a => a.val);
      return assestforpie;
      
  }