

export class InterviewQPage{

   private inputString: string;
   private larArray: number[] | string [];

   constructor(input : string ){
        this.inputString = input;
        
   }

   public reverseString(): string{
        
        return this.inputString.split(' ').reverse().join(' ');
        
   }
   public getReveresed(): string{
        let reversed =''; 
        let stringLength : number = this.inputString.length;
        for(let i = stringLength-1; i>=0;i--){
            reversed = reversed + this.inputString[i];
        }
        return reversed;
   }
   public reverseWord(): string{
    const words = this.inputString.split(" "); // Name Is Jayesh
    let result: string[]= [];
    for(let word of words){
        let reverseWord ='';
        for(let i= word.length-1;i>=0; i--)
        {
            reverseWord = reverseWord+word[i];
        }
        result.push(reverseWord);
    }
    return result.join(" ");
   }

   
}
