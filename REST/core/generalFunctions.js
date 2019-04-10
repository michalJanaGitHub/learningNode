const urlDiacriticsDict = {     // not finished
  '%08' : 'backspace' ,
  '%09' : 'tab' ,
  '%0A' : 'linefeed' ,
  '%0D' : 'creturn' ,
  '%20' : ' ' ,
  '%21' : '!' ,
  '%22' : '"' ,
  '%23' : '#' ,
  '%24' : '$' ,
  '%25' : '%' ,
  '%26' : '&' ,
  '%27' : `'` ,
  '%28' : '(' ,
  '%29' : ')' ,
  '%2A' : '*' ,
  '%2B' : '+' ,
  '%2C' : ',' ,
  '%2D' : '-' ,
  '%2E' : '.' ,
  '%2F' : '/' ,
  '%30' : '0' ,
  '%31' : '1' ,
  '%32' : '2' ,
  '%33' : '3' ,
  '%34' : '4' ,
  '%35' : '5' ,
  '%36' : '6' ,
  '%37' : '7' ,
  '%38' : '8' ,
  '%39' : '9' ,
  '%3A' : ':' ,
  '%3B' : ';' ,
  '%3C' : '<' ,
  '%3D' : '=' ,
  '%3E' : '>' ,
  '%3F' : '?' ,
  '%40' : '@' ,
  '%41' : 'A' ,
  '%42' : 'B' ,
  '%43' : 'C' ,
  '%44' : 'D' ,
  '%45' : 'E' ,
  '%46' : 'F' ,
  '%47' : 'G' ,
  '%48' : 'H' ,
  '%49' : 'I' ,
  '%4A' : 'J' ,
  '%4B' : 'K' ,
  '%4C' : 'L' ,
  '%4D' : 'M' ,
  '%4E' : 'N' ,
  '%4F' : 'O' ,
  '%50' : 'P' ,
  '%51' : 'Q' ,
  '%52' : 'R' ,
  '%53' : 'S' ,
  '%54' : 'T' ,
  '%55' : 'U' ,
  '%56' : 'V' ,
  '%57' : 'W' ,
  '%58' : 'X' ,
  '%59' : 'Y' ,
  '%5A' : 'Z' ,
  '%5B' : '[' ,
  '%5C' : '\\' ,
  '%5D' : ']' ,
  '%5E' : '^' ,
  '%5F' : '_' ,
  '%60' : '`' ,
  '%61' : 'a' ,
  '%62' : 'b' ,
  '%63' : 'c' ,
  '%64' : 'd' ,
  '%65' : 'e' ,
  '%66' : 'f' ,
  '%67' : 'g' ,
  '%68' : 'h' ,
  '%69' : 'i' ,
  '%6A' : 'j' ,
  '%6B' : 'k' ,
  '%6C' : 'l' ,
  '%6D' : 'm' ,
  '%6E' : 'n' ,
  '%6F' : 'o' ,
  '%70' : 'p' ,
  '%71' : 'q' ,
  '%72' : 'r' ,
  '%73' : 's' ,
  '%74' : 't' ,
  '%75' : 'u' ,
  '%76' : 'v' ,
  '%77' : 'w' ,
  '%78' : 'x' ,
  '%79' : 'y' ,
  '%7A' : 'z' ,
  '%7B' : '{' ,
  '%7C' : '|' ,
  '%7D' : '}' ,
  '%7E' : '~' ,
  '%A2' : '¢' ,
  '%A3' : '£' ,
  '%A5' : '¥' ,
  '%A6' : '|' ,
  '%A7' : '§' ,
  '%AB' : '«' ,
  '%AC' : '¬' ,
  '%AD' : '¯' ,
  '%B0' : 'º' ,
  '%B1' : '±' ,
  '%B2' : 'ª' ,
  '%B4' : ',' ,
  '%B5' : 'µ' ,
  '%BB' : '»' ,
  '%BC' : '¼' ,
  '%BD' : '½' ,
  '%BF' : '¿' ,
  '%C0' : 'À' ,
  '%C1' : 'Á' ,
  '%C2' : 'Â' ,
  '%C3' : 'Ã' ,
  '%C4' : 'Ä' ,
  '%C5' : 'Å' ,
  '%C6' : 'Æ' ,
  '%C7' : 'Ç' ,
  '%C8' : 'È' ,
  '%C9' : 'É' ,
  '%CA' : 'Ê' ,
  '%CB' : 'Ë' ,
  '%CC' : 'Ì' ,
  '%CD' : 'Í' ,
  '%CE' : 'Î' ,
  '%CF' : 'Ï' ,
  '%D0' : 'Ð' ,
  '%D1' : 'Ñ' ,
  '%D2' : 'Ò' ,
  '%D3' : 'Ó' ,
  '%D4' : 'Ô' ,
  '%D5' : 'Õ' ,
  '%D6' : 'Ö' ,
  '%D8' : 'Ø' ,
  '%D9' : 'Ù' ,
  '%DA' : 'Ú' ,
  '%DB' : 'Û' ,
  '%DC' : 'Ü' ,
  '%DD' : 'Ý' ,
  '%DE' : 'Þ' ,
  '%DF' : 'ß' ,
  '%E0' : 'à' ,
  '%E1' : 'á' ,
  '%E2' : 'â' ,
  '%E3' : 'ã' ,
  '%E4' : 'ä' ,
  '%E5' : 'å' ,
  '%E6' : 'æ' ,
  '%E7' : 'ç' ,
  '%E8' : 'è' ,
  '%E9' : 'é' ,
  '%EA' : 'ê' ,
  '%EB' : 'ë' ,
  '%EC' : 'ì' ,
  '%ED' : 'í' ,
  '%EE' : 'î' ,
  '%EF' : 'ï' ,
  '%F0' : 'ð' ,
  '%F1' : 'ñ' ,
  '%F2' : 'ò' ,
  '%F3' : 'ó' ,
  '%F4' : 'ô' ,
  '%F5' : 'õ' ,
  '%F6' : 'ö' ,
  '%F7' : '÷' ,
  '%F8' : 'ø' ,
  '%F9' : 'ù' ,
  '%FA' : 'ú' ,
  '%FB' : 'û' ,
  '%FC' : 'ü' ,
  '%FD' : 'ý' ,
  '%FE' : 'þ' ,
  '%FF' : 'ÿ' ,  
};   
let decodeDiacritics = (urlString) => {
    let output  = '';
    let char = '';
    let l = urlString.length;
    
    for (i = 0; i < l; i++) {
      char = urlString.substring(i, i + 1);
      if (char === '%') {
        let tran = urlDiacriticsDict[urlString.substring(i, i + 3)];
        if (tran) output += tran;
        else output += '?';
        i+=2;
      }
      else {
        output += char;
      }
    }
    return output;  
};
exports.decodeDiacritics = (urlString) => {
  decodeDiacritics(urlString);
};
  
  exports.urlToJsonD = (url) => {
    let hash;
    let myJson = {};
    url = decodeDiacritics(url);
    let hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        myJson[hash[0]] = hash[1];
    }
    return myJson;
};  
  
exports.urlToJson = (url) => {
  let hash;
  let myJson = {};
  let hashes = url.slice(url.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      myJson[hash[0]] = hash[1];
  }
  console.log(url);
  console.log(myJson);  
  let myJsonStr = JSON.stringify(myJson);
  console.log (myJsonStr);
  myJsonStr = myJsonStr.replace('+', '%20');
  myJsonStr = decodeDiacritics(myJsonStr);
  console.log (myJsonStr);
  myJson = JSON.parse(myJsonStr);
  return myJson;
}; 