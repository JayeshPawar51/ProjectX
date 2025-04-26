

export class InterviewArrayPage{

   
    public processArray(ab:any[]): any{
        
        if(ab.length === 0)
        {
            return undefined;
        }
        if (typeof ab[0] ==='number')
        {
            return Math.max(...(ab as number[]));
        }
        else
        {
            return ab.sort();
        }
       }
    
}