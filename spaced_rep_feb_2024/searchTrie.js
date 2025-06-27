/*
 * My ceo does not like bad words. Given a username, check if this username is a bad word. 
 
   For example, if the bad word is "fork", and username is "iamfork", this is consider a bad username


   badwords = ["fork","tea"]
   input: "iamfork"
   output: true


  input: "iamfort"
   output: false


/**
 * 
 
create a Trie for all of the badwords 
O(n + m)...n for words...m for word length


iterate over the input


O(k * (n + m))...k our input length


iamfork

0: is i in the Trie ...no
1: is am in trhe trie...no 
2: no....
3: Trie has F - search Trie....last letter will be K   isWord 

iamfort

0: is i in the Trie ...no
1: is am in trhe trie...no 
2: no....
3: Trie has F , trie has o, trie has r, break
4: o is not in the Trie
5: r is not in the true
6: t is in the trie....break immediately

return false


   The tricky part, our users like to get around check by subsituting letters for symbols/characters. For example they will write their username as "iamf0rk". We also want to return this username as bad. 

  input:  sub = {
            "o": ["0", "d"],
            "l": ["1"],
            "q" : ["0"]   
        }
       input:  badwords = ["fork","tea"]
                                   i
                                      j 

       group 0: "o" and "q"

        input: "iamf0rk"
        
       Create a hash map of the sub input to map "0" and "d" to "o"

       when we iterate over the input, we're going to check to see if it's in the hashmap...if it's
       in the hashmap we'll use that letter to proceed.

       3rd parameter called "sub" O(26 * s)...s is the amount of possible value mappings

       O(k * s * (n + m))...k our input length

       * building the trie: (n*m) 
       * Search -    k * s *  x - longest bad word

      any other approach to improve Search time complexity here? (add time complexity to the trie Building piece is fine)

       
        output: true
 */

                //                         *
                //         f                           t
                //     o                                  e
                //   r                                      a(isWord = true)
                // k(isWord = true)

                class Trie {
                  constructor(isWord = false) {
                      this.keys = new Map();
                      this.isWord = isWord;
                  }
                  insert(w, trie, subs) {
                      let copy = trie
                      for(let i = 0; i < w.length; i++) {
                          if (!copy.keys.has(w[i])) {
                              copy.keys.set(w[i], new Trie())
                          }

                          // add all subs here
                          if (subs[w[i]]) {
                            subs[w[i]].forEach(char => {
                              if (!copy.key.has(char)) {
                                copy.keys.set(char, copy.keys.get(w[i]))
                              }
                            })
                          }

                          copy = copy.keys.get(w[i])
                          if (i === w.length-1) copy.isWord = true;
                      }
                  }
              }
          
                  const isBadWord = (username, badWords, subs) => {
                    let root = new Trie();
                    //build Trie
                    badWords.forEach(word => root.insert(word, root, subs))
          
                    let map = new Map();// 0: [o,q] built
                          
                    //iamf0rk
                   //     j
          
                    for (let i = 0; i < username.length; i++) {
                      let c = username[i]
                      let copy = root;
                      
                        for (let j = i; j < username.length; j++) { 
                          let char = username[j]
          
                          if (!copy.keys.has(char) && !map.has(char)) break;
          
                          if (map.has(char)) {
          
                            for (let w of map.get(char)) {
                             // reuseable method that returns true/false
                            }
          
                          } else {
                            // regular search
                            copy = copy.keys.get(char)
                            if (copy.isWord) return true
                          }
          
                        }
                      
                    }
                     return false
                  }