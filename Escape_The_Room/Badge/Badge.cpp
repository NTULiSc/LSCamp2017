#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main(){
	int SpNum, Count=0, SIZE=1;
	string url, Badge;
	vector<string> urls;

	// cout << "Please enter the space number between two urls\n";
	cin >> SpNum;

	for(int i = 0; i < 5; i++){
		cin >> url;
		urls.push_back(url);
		Badge += url;
		for(int j = 0; j < SpNum; j++){
			Badge += " ";
		}
	}

	/*cout << Badge;
	cout << Badge.size();*/

	cout << "For html :\n";
	for(int k = 0; k < Badge.size(); k++){
		if(k == SIZE-1){
			if(k != 0) cout << "</a></h4>\n";
			cout << "<h4 id=\"Hint" << Count << "\"><a href=\"" << urls[0] << "\">\n";
			cout << "\t<span class=\"char" << k << "\">" << Badge[k] << "</span>\n";
			Count++;
			if(Count < 5) SIZE += urls[Count].size()+SpNum;
		}
		else cout << "\t<span class=\"char" << k << "\">" << Badge[k] << "</span>\n";
		if( k == Badge.size()-1 ) cout << "</a></h4>\n";
	}

	cout << "\nFor css : \n";
	for(int l = 0; l < Badge.size(); l++){
		cout << ".char" << l <<  "{ transform: rotate(" << (l+1)*( 360/Badge.size() ) << "deg);}\n";
	}
	return 0;
}


// for html
	// <h4 id="Hint1"><a href="https://goo.gl/V8vtGM">
	// <span class="char1">h</span>
// for css 		.char1 { transform: rotate(6deg);}