# What is an API?

**To understand APIs, we need to cover two main concepts:**

#### Kaise baatchit karein (How to Communicate)
#### Kaise aalas dikhayein (How to Be Lazy)

### First Chapter - Kaise Baatchit Karein (How to Communicate)

- Log alag-alag bhashaaon mein baat karte hain, jaise Rajasthani, Gujarati, Hindi, Malayalam.
- Lekin humne yha(youtube) pr ek protocol bana liya hai ki ham jo h hindi mein baat krenge 
- so hmne is problem ko is tareeke se solve kiya, ek common jagah (here is youtube platform) pr aake jaha pr jyada tar log hindi bol rhe us bhasha ko chuna
- now aap us bhasa ke andar se kaise bhi interpret kre aapko baat smjh aa jati h
--------------------
- that same problem goes with computer system
- Frontend Python ya JavaScript mein likha ho sakta hai, backend Java ya Laravel mein.
- Toh yeh alag-alag languages ek doosre se baat kaise karein?
- So yeh baat krne ki problem do tarikon se solve hoti hai:
- Protocol aur Data (jo baat krni h  ya data humein send/receive karna hai).
---------------------
- API ek data h us data ko structure kaise karna hai, uska datatype kya hona chahiye—yeh sab milkar decide kr liya h ki hnn isi tarah se data bhejnge
- toh jo system java mein bna h, usse API send krte h kisi dusre system ko, to dusra system h wo chahe kisi bhi lang mein ho, wo bhi aapki baat(data) smjh paye
- Yhi reason h ki API exist karti hain alag alag system/application/server mein wo chahe kisi hi lang mein ho

### Second Chapter - Kaise Aalas Dikhayein (How to Be Lazy)

-Agar aapko weather application banani ho, originally toh aapko satellite khareedni padti, us satellite ko space mein bheja jayega then wo data collect krega
- but this is not in our budget.
-To data(weather ka data) aapke paas aa kaise rha h? Yes yeh data third-party de rhi h hai humein API ke roop mein, taaki hum us format mein baat kar sakein.
-----------------
- Jaise "Login with Google" mein hum apna system use nhi krte h blki ham google par trust karte hain ki jab ham user se login with google karne ko khte h to ye assume krte h ki already google ne uska account apne system pr bana diya hoga aur verifcation check jasis cheezein bhi krdi hongi, no i can allow that user to use my application
- Google jo token ya verification bhejta hai ki user exist karta hai, uske saath uska email bhi aa jaye taaki hum usko apne database mein store kar paayein.
--------------
- Weather data ke case mein, jo bhi company weather-related kaam kar rahi hai, humein wahi se data dilwa dijiye
- Toh yeh hai API ka kaam: pehle communication ki problem ko solve karna aur dusra data ko manage karna.

#### Restaurant Example

- Jab hum Swiggy/Zomato se khana order karte hain, hum menu dekhte hain aur jo chaahiye, woh order kar dete hain. Humein yeh sochne ki zaroorat nahi hoti ki khana kaun banayega aur kaise aayega. Humein sirf khana chahiye hota hai aur uska intezaar karna hota h
- API bhi waise hi kaam karti hai. Aapko ek documentation(menu in case of restaurant) diya jata hai, jisse aap jo bhi data (food) request (order) karte hain, fir aap thoda intezaar karte hain, aur data kuch milliseconds ya seconds (food 10-15min) mein website (ghar) pe aa jata hai.

#### Summary

- in API, Bas ek protocol follow karna hota hai ki kis tareeke se data ko arrange karna hai aur is tareeke se jisne bhi request ki hoti hai, wapas se usko waise hi data send karna hota hai.