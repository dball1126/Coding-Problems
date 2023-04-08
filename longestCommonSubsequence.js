/** text2 a
 * ace
 */

 // top down 
 // i for text1
 // j for text2
// var longestCommonSubsequence = function(text1, text2, i = 0, j = 0, memo = new Map()) {
//     if (i >= text1.length || j >= text2.length) return 0;
//     const key = i + '' + j
//     if (memo.has(key)) return memo.get(key)

//     if (text1[i] === text2[j]) {
//         memo.set(key, 1 + longestCommonSubsequence(text1, text2, i+1, j+1, memo))
//     } else {
//         memo.set(key, Math.max(
//             longestCommonSubsequence(text1, text2, i+1, j, memo),
//             longestCommonSubsequence(text1, text2, i, j+1, memo),
//         ))
//     }
//     return memo.get(key)
// };

// bottom up

// var longestCommonSubsequence = function(s, t) {
//     const [dp, mL] = [[], Math.max(s.length, t.length)]
//     // build DP table
//     for (let i = 0; i <= mL; i++) {
//         const arr = []
//         for (let j = 0; j <= mL; j++) {
//             arr.push(0)
//         }
//         dp.push(arr)
//     }

//     for (let i = mL-1; i >= 0; i--) {
//         for (let j = mL-1; j >= 0; j--) {
//             if (s[i] === t[j]) {
//                 dp[i][j] = 1 + dp[i+1][j+1]
//             } else {
//                 dp[i][j] = Math.max(dp[i+1][j], dp[i][j+1])
//             }
//         }
//     }
//     return dp[0][0]
// }

/**
 * State Var: i and j for idx's of both inputs
 * Base case: 0 for out of bounds
 * Recurrence Relation: 
 *  dp(i, j) = 0
 *  if s1[i] === s2[j]
 *      dp(i, j) = 1 + dp(i+1, j+1)
 *  else 
 *      dp(i, j) = Math.max(dp(i+1, j), dp(i, j+1))
 * Space: O(n)
 * Time: O(1) + n * m = O(n * m)
 */
// top down
var longestCommonSubsequence = function(s, t) {
    let len = Math.max(s.length, t.length)
    const memo = [...new Array(len+1)].map(a => [...new Array(len+1)].fill(-Infinity))
    const dp = (i, j) => {
        if (i >= s .length || j >= t.length) return 0;
        if (memo[i][j] !== -Infinity) return memo[i][j];
        memo[i][j] = 0;
        if (s[i] === t[j]) {
            memo[i][j] = 1 + dp(i+1, j+1)
        } else {
            memo[i][j] = Math.max(dp(i+1, j), dp(i, j+1))
        }
        return memo[i][j];
    }
    return dp(0,0)
}
// bottom up
var longestCommonSubsequence = function(s, t) {
    let len = Math.max(s.length, t.length)
    const dp = [...new Array(len+1)].map(a => [...new Array(len+1)].fill(0))

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            if (s[i] === t[j]) {
                dp[i][j] += 1
                if (dp[i-1] && dp[i-1][j-1]) {
                    dp[i][j] += dp[i-1][j-1]
                }
            } else {
                let [v1, v2] = [0, 0]
                if (dp[i-1] && dp[i-1][j]) v1 = dp[i-1][j]
                if (dp[j-1] && dp[i][j-1]) v2 = dp[i][j-1]
                dp[i][j] = Math.max(v1, v2)
            }
        }
        
    }
    return dp[s.length-1][t.length-1]
}

// console.log(longestCommonSubsequence("uvirivwbkdijstyjgdahmtutav",
// "apazcdspcnolsvmlorqxazglyjq"))

// console.log(longestCommonSubsequence("fcvafurqjylclorwfoladwfqzkbebslwnmpmlkbezkxoncvwhstwzwpqxqtyxozkpgtgtsjobujezgrkvevklmludgtyrmjaxyputqbyxqvupojutsjwlwluzsbmvyxifqtglwvcnkfsfglwjwrmtyxmdgjifyjwrsnenuvsdedsbqdovwzsdghclcdexmtsbexwrszihcpibwpidixmpmxshwzmjgtadmtkxqfkrsdqjcrmxkbkfoncrcvoxuvcdytajgfwrcxivixanuzerebuzklyhezevonqdsrkzetsrgfgxibqpmfuxcrinetyzkvudghgrytsvwzkjulmhanankxqfihenuhmfsfkfepibkjmzybmlkzozmluvybyzsleludsxkpinizoraxonmhwtkfkhudizepyzijafqlepcbihofepmjqtgrsxorunshgpazovuhktatmlcfklafivivefyfubunszyvarcrkpsnglkduzaxqrerkvcnmrurkhkpargvcxefovwtapedaluhclmzynebczodwropwdenqxmrutuhehadyfspcpuxyzodifqdqzgbwhodcjonypyjwbwxepcpujerkrelunstebopkncdazexsbezmhynizsvarafwfmnclerafejgnizcbsrcvcnwrolofyzulcxaxqjqzunedidulspslebifinqrchyvapkzmzwbwjgbyrqhqpolwjijmzyduzerqnadapudmrazmzadstozytonuzarizszubkzkhenaxivytmjqjgvgzwpgxefatetoncjgjsdilmvgtgpgbibexwnexstipkjylalqnupexytkradwxmlmhsnmzuxcdkfkxyfgrmfqtajatgjctenqhkvyrgvapctqtyrufcdobibizihuhsrsterozotytubefutaxcjarknynetipehoduxyjstufwvkvwvwnuletybmrczgtmxctuny",
// "nohgdazargvalupetizezqpklktojqtqdivcpsfgjopaxwbkvujilqbclehulatshehmjqhyfkpcfwxovajkvankjkvevgdovazmbgtqfwvejczsnmbchkdibstklkxarwjqbqxwvixavkhylqvghqpifijohudenozotejoxavkfkzcdqnoxydynavwdylwhatslyrwlejwdwrmpevmtwpahatwlaxmjmdgrebmfyngdcbmbgjcvqpcbadujkxaxujudmbejcrevuvcdobolcbstifedcvmngnqhudixgzktcdqngxmruhcxqxypwhahobudelivgvynefkjqdyvalmvudcdivmhghqrelurodwdsvuzmjixgdexonwjczghalsjopixsrwjixuzmjgxydqnipelgrivkzkxgjchibgnqbknstspujwdydszohqjsfuzstyjgnwhsrebmlwzkzijgnmnczmrehspihspyfedabotwvwxwpspypctizyhcxypqzctwlspszonsrmnyvmhsvqtkbyhmhwjmvazaviruzqxmbczaxmtqjexmdudypovkjklynktahupanujylylgrajozobsbwpwtohkfsxeverqxylwdwtojoxydepybavwhgdehafurqtcxqhuhkdwxkdojipolctcvcrsvczcxedglgrejerqdgrsvsxgjodajatsnixutihwpivihadqdotsvyrkxehodybapwlsjexixgponcxifijchejoxgxebmbclczqvkfuzgxsbshqvgfcraxytaxeviryhexmvqjybizivyjanwxmpojgxgbyhcruvqpafwjslkbohqlknkdqjixsfsdurgbsvclmrcrcnulinqvcdqhcvwdaxgvafwravunurqvizqtozuxinytafopmhchmxsxgfanetmdcjalmrolejidylkjktunqhkxchyjmpkvsfgnybsjedmzkrkhwryzan"
// ))

console.log(longestCommonSubsequence( text1 = "abc", text2 = "def" ))

// s