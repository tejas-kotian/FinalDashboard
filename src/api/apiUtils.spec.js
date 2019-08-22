
  import {
    handleResponse,
    handleError
  } from "./apiUtils";
  
  
  describe("Assests with all values", () => {
    
    
    it('returns Success',async () => {
      let resp ={};
      resp.ok =true;
      resp.json = function(){
        return "Test";
      }
      const data = await handleResponse(resp);
      expect(data).toBe('Test');
    });

   
    

   
  });
  
  
  
  