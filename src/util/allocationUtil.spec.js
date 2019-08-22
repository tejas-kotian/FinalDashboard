
  import {
    allocationUtil,
    allocationUtilTotal,
    filterItems,
    filterItemsPie
  } from "./allocationUtil";
  
  
  describe("Assests with all values", () => {
    
    const result = {
        assests: [
          {
            id: 1,
            name: 'S&P 500 ®',
            options: [
              {
                years: 1,
                value: '6.10'
              }
            ],
            val: 1
          },
          {
            id: 2,
            name: 'MSCI EAFE Index',
            options: [
              {
                years: 1,
                value: '6.15'
              }
            ],
            val: 1
          },
          {
            id: 3,
            name: 'Dow Jones U.S. Real Estate Index',
            options: [
              {
                years: 1,
                value: '6.50'
              }
            ],
            val: 2
          },
          {
            id: 4,
            name: 'Bloomberg Commodity Index',
            options: [
              {
                years: 1,
                value: '6.15'
              }
            ],
            val: 2
          }
        ]
    };
    
    it('returns total', () => {
      expect(allocationUtilTotal(result.assests)).toBeTruthy();
    });

        it('returns total for all the assest', () => {
      expect(allocationUtilTotal(result.assests)).toEqual(6);
     
    });

   
  });
  
  describe("Assests with one value and others not set", () => {
    
    const result = {
        assests: [
          {
            id: 1,
            name: 'S&P 500 ®',
            options: [
              {
                years: 1,
                value: '6.10'
              }
            ],
            val: 1
          },
          {
            id: 2,
            name: 'MSCI EAFE Index',
            options: [
              {
                years: 1,
                value: '6.15'
              }
            ]
          },
          {
            id: 3,
            name: 'Dow Jones U.S. Real Estate Index',
            options: [
              {
                years: 1,
                value: '6.50'
              }
            ]
          },
          {
            id: 4,
            name: 'Bloomberg Commodity Index',
            options: [
              {
                years: 1,
                value: '6.15'
              }
            ],
            val: 2
          }
        ]
    };
    
    it('returns total', () => {
      expect(allocationUtilTotal(result.assests)).toBeTruthy();
    });

        it('returns total for all the assest with 3', () => {
      expect(allocationUtilTotal(result.assests)).toEqual(3);
     
    });

   
  });
  
  describe("Assests with one value and others  set val to 0 and exlude id 1", () => {
    
    const result = {
        assests: [
          {
            id: 1,
            name: 'S&P 500 ®',
            options: [
              {
                years: 1,
                value: '6.10'
              }
            ],
            val: 1
          },
          {
            id: 2,
            name: 'MSCI EAFE Index',
            options: [
              {
                years: 1,
                value: '6.15'
              }
            ],
            val:0
          },
          {
            id: 3,
            name: 'Dow Jones U.S. Real Estate Index',
            options: [
              {
                years: 1,
                value: '6.50'
              }
            ],
            val:0
          },
          {
            id: 4,
            name: 'Bloomberg Commodity Index',
            options: [
              {
                years: 1,
                value: '6.15'
              }
            ],
            val: 2
          }
        ]
    };
    
    it('returns total', () => {
      expect(allocationUtil(result.assests,1,0)).toBeTruthy();
    });

        it('returns total for all the assest with 2', () => {
      expect(allocationUtil(result.assests,1,0)).toEqual(2);
     
    });

   
  });


  
  