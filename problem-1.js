// নিচের Sentence টিতে Banagladesh শব্দটি কতবার ব্যবহার হয়েছে?
// প্রথম Banagladesh শব্দটি কত নাম্বার index এ আছে 

const sentence = "In the heart of South Asia lies the vibrant nation of Bangladesh, where bustling cities and serene countryside harmoniously coexist. Bangladesh, with its rich cultural heritage and warm hospitality, beckons travelers to explore its diverse landscapes. From the lush greenery of the Sundarbans to the bustling streets of Dhaka, Bangladesh offers a tapestry of experiences. The people of Bangladesh are renowned for their resilience and determination, embodying the spirit of their nation. Whether savoring traditional Bengali cuisine or admiring the ancient architecture, every corner of Bangladesh tells a unique story of resilience and beauty.";

const matchedWord = sentence.match(/Bangladesh/gi); 

// Checked type of matchedWord
// console.log(typeof matchedWord); //Object 

// Show full object 
console.log(matchedWord); //['Bangladesh', 'Bangladesh', 'Bangladesh','Bangladesh', 'Bangladesh']

// Count total matched word from the object (If object value = null then it will show "Not Found" message)
const countMatchWord = matchedWord ? matchedWord.length : "Not found"; //5

console.log(countMatchWord); //5 

// Check first word index number 
const firstOccurance = sentence.search(/bangladesh/i); //54

console.log(firstOccurance); //54