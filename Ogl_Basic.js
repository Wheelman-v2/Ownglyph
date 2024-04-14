    function redirectToLink(linkType) {
      var baseUrl = 'https://github.com/Wheelman-v2/Ownglyph/raw/main';
      var specificPaths = {
        'OG_르네상스_비밀': 'BASIC/OG_르네상스_비밀.zip',
        '온글잎_002': 'BASIC/온글잎_002.zip',
        '온글잎_00신비체00': 'BASIC/온글잎_00신비체00.zip',
        '온글잎_0726_여진체': 'BASIC/온글잎_0726_여진체.zip',
        '온글잎_0828': 'BASIC/온글잎_0828.zip',
        '온글잎_0923': 'BASIC/온글잎_0923.zip',
        '온글잎_0미': 'BASIC/온글잎_0미.zip',
        '온글잎_10': 'BASIC/온글잎_10.zip',
        '온글잎_100단비': 'BASIC/온글잎_100단비.zip',
        '온글잎_102102현': 'BASIC/온글잎_102102현.zip',
        '온글잎_11월의스즈메': 'BASIC/온글잎_11월의스즈메.zip',
        '온글잎_2002빈': 'BASIC/온글잎_2002빈.zip',
        '온글잎_2022_민희체': 'BASIC/온글잎_2022_민희체.zip',
        '온글잎_2022샤인체': 'BASIC/온글잎_2022샤인체.zip',
        '온글잎_2023_혀니쓰': 'BASIC/온글잎_2023_혀니쓰.zip',
        '온글잎_2121': 'BASIC/온글잎_2121.zip',
        '온글잎_21세_휘수체': 'BASIC/온글잎_21세_휘수체.zip',
        '온글잎_22석정_가연': 'BASIC/온글잎_22석정_가연.zip',
        '온글잎_22석정_강희': 'BASIC/온글잎_22석정_강희.zip',
        '온글잎_22석정_규빈': 'BASIC/온글잎_22석정_규빈.zip',
        '온글잎_22석정_다은': 'BASIC/온글잎_22석정_다은.zip',
        '온글잎_22석정_다정': 'BASIC/온글잎_22석정_다정.zip',
        '온글잎_22석정_도용': 'BASIC/온글잎_22석정_도용.zip',
        '온글잎_22석정_민경': 'BASIC/온글잎_22석정_민경.zip',
        '온글잎_22석정_민주': 'BASIC/온글잎_22석정_민주.zip',
        '온글잎_22석정_박범': 'BASIC/온글잎_22석정_박범.zip',
        '온글잎_22석정_수민': 'BASIC/온글잎_22석정_수민.zip',
        '온글잎_22석정_수정': 'BASIC/온글잎_22석정_수정.zip',
        '온글잎_22석정_연우': 'BASIC/온글잎_22석정_연우.zip',
        '온글잎_22석정_예빈': 'BASIC/온글잎_22석정_예빈.zip',
        '온글잎_22석정_원필': 'BASIC/온글잎_22석정_원필.zip',
        '온글잎_22석정_유은': 'BASIC/온글잎_22석정_유은.zip',
        '온글잎_22석정_윤지': 'BASIC/온글잎_22석정_윤지.zip',
        '온글잎_22석정_율원': 'BASIC/온글잎_22석정_율원.zip',
        '온글잎_22석정_은지': 'BASIC/온글잎_22석정_은지.zip',
        '온글잎_22석정_준성': 'BASIC/온글잎_22석정_준성.zip',
        '온글잎_22석정_지호': 'BASIC/온글잎_22석정_지호.zip',
        '온글잎_22석정_진아': 'BASIC/온글잎_22석정_진아.zip',
        '온글잎_22석정_태훈': 'BASIC/온글잎_22석정_태훈.zip',
        '온글잎_22석정_하늘': 'BASIC/온글잎_22석정_하늘.zip',
        '온글잎_22석정_하율': 'BASIC/온글잎_22석정_하율.zip',
        '온글잎_22송영훈체': 'BASIC/온글잎_22송영훈체.zip',
        '온글잎_23_다영체': 'BASIC/온글잎_23_다영체.zip',
        '온글잎_27세_박사_수현': 'BASIC/온글잎_27세_박사_수현.zip',
        '온글잎_305': 'BASIC/온글잎_305.zip',
        '온글잎_31그레이스': 'BASIC/온글잎_31그레이스.zip',
        '온글잎_33체': 'BASIC/온글잎_33체.zip',
        '온글잎_401': 'BASIC/온글잎_401.zip',
        '온글잎_501호': 'BASIC/온글잎_501호.zip',
        '온글잎_623': 'BASIC/온글잎_623.zip',
        '온글잎_7살소유체': 'BASIC/온글잎_7살소유체.zip',
        '온글잎_8136': 'BASIC/온글잎_8136.zip',
        '온글잎_82': 'BASIC/온글잎_82.zip',
        '온글잎_8살하니': 'BASIC/온글잎_8살하니.zip',
        '온글잎_920920': 'BASIC/온글잎_920920.zip',
        '온글잎_97수정': 'BASIC/온글잎_97수정.zip',
        '온글잎_가느다란물방울체': 'BASIC/온글잎_가느다란물방울체.zip',
        '온글잎_가댕이의_하루': 'BASIC/온글잎_가댕이의_하루.zip',
        '온글잎_가댬체': 'BASIC/온글잎_가댬체.zip',
        '온글잎_가랏미나몬': 'BASIC/온글잎_가랏미나몬.zip',
        '온글잎_가벼웁게': 'BASIC/온글잎_가벼웁게.zip',
        '온글잎_가영이동글이체': 'BASIC/온글잎_가영이동글이체.zip',
        '온글잎_가오니': 'BASIC/온글잎_가오니.zip',
        '온글잎_가온': 'BASIC/온글잎_가온.zip',
        '온글잎_가을고은': 'BASIC/온글잎_가을고은.zip',
        '온글잎_가을열매체': 'BASIC/온글잎_가을열매체.zip',
        '온글잎_가인체': 'BASIC/온글잎_가인체.zip',
        '온글잎_가현라이트체': 'BASIC/온글잎_가현라이트체.zip',
        '온글잎_가현체': 'BASIC/온글잎_가현체.zip',
        '온글잎_갈매기는끼룩체': 'BASIC/온글잎_갈매기는끼룩체.zip',
        '온글잎_갈색펭귄': 'BASIC/온글잎_갈색펭귄.zip',
        '온글잎_감사한체': 'BASIC/온글잎_감사한체.zip',
        '온글잎_감쟈체': 'BASIC/온글잎_감쟈체.zip',
        '온글잎_갓생사는수민': 'BASIC/온글잎_갓생사는수민.zip',
        '온글잎_갓우스체': 'BASIC/온글잎_갓우스체.zip',
        '온글잎_강건': 'BASIC/온글잎_강건.zip',
        '온글잎_강레네체': 'BASIC/온글잎_강레네체.zip',
        '온글잎_강민체': 'BASIC/온글잎_강민체.zip',
        '온글잎_강변대나무': 'BASIC/온글잎_강변대나무.zip',
        '온글잎_강사장글씨체': 'BASIC/온글잎_강사장글씨체.zip',
        '온글잎_강서아': 'BASIC/온글잎_강서아.zip',
        '온글잎_강선비': 'BASIC/온글잎_강선비.zip',
        '온글잎_강수정체': 'BASIC/온글잎_강수정체.zip',
        '온글잎_개구리발가락체': 'BASIC/온글잎_개구리발가락체.zip',
        '온글잎_개미손글씨': 'BASIC/온글잎_개미손글씨.zip',
        '온글잎_갱희체': 'BASIC/온글잎_갱희체.zip',
        '온글잎_건아체': 'BASIC/온글잎_건아체.zip',
        '온글잎_검냥이체': 'BASIC/온글잎_검냥이체.zip',
        '온글잎_검은하늘': 'BASIC/온글잎_검은하늘.zip',
        '온글잎_게임체': 'BASIC/온글잎_게임체.zip',
        '온글잎_경둥이체': 'BASIC/온글잎_경둥이체.zip',
        '온글잎_경민': 'BASIC/온글잎_경민.zip',
        '온글잎_경민이의_일기': 'BASIC/온글잎_경민이의_일기.zip',
        '온글잎_경사모': 'BASIC/온글잎_경사모.zip',
        '온글잎_경원체': 'BASIC/온글잎_경원체.zip',
        '온글잎_경이로운폰트': 'BASIC/온글잎_경이로운폰트.zip',
        '온글잎_경임': 'BASIC/온글잎_경임.zip',
        '온글잎_경준22체': 'BASIC/온글잎_경준22체.zip',
        '온글잎_경헌체': 'BASIC/온글잎_경헌체.zip',
        '온글잎_고고아체': 'BASIC/온글잎_고고아체.zip',
        '온글잎_고고정숙체': 'BASIC/온글잎_고고정숙체.zip',
        '온글잎_고동연손글씨': 'BASIC/온글잎_고동연손글씨.zip',
        '온글잎_고래돋움': 'BASIC/온글잎_고래돋움.zip',
        '온글잎_고보똥체': 'BASIC/온글잎_고보똥체.zip',
        '온글잎_고수진흘림체': 'BASIC/온글잎_고수진흘림체.zip',
        '온글잎_고슴도치새끼': 'BASIC/온글잎_고슴도치새끼.zip',
        '온글잎_고재건': 'BASIC/온글잎_고재건.zip',
        '온글잎_곧디곧체': 'BASIC/온글잎_곧디곧체.zip',
        '온글잎_곰곰체': 'BASIC/온글잎_곰곰체.zip',
        '온글잎_곰도리서연체': 'BASIC/온글잎_곰도리서연체.zip',
        '온글잎_곰선생구멍가게': 'BASIC/온글잎_곰선생구멍가게.zip',
        '온글잎_곰재민날림': 'BASIC/온글잎_곰재민날림.zip',
        '온글잎_곰탱체': 'BASIC/온글잎_곰탱체.zip',
        '온글잎_공대리': 'BASIC/온글잎_공대리.zip',
        '온글잎_공선욱체': 'BASIC/온글잎_공선욱체.zip',
        '온글잎_공앵용체': 'BASIC/온글잎_공앵용체.zip',
        '온글잎_공이': 'BASIC/온글잎_공이.zip',
        '온글잎_공이이육': 'BASIC/온글잎_공이이육.zip',
        '온글잎_공쥬날림': 'BASIC/온글잎_공쥬날림.zip',
        '온글잎_곽오리체': 'BASIC/온글잎_곽오리체.zip',
        '온글잎_광희는진아체_514': 'BASIC/온글잎_광희는진아체_514.zip',
        '온글잎_괴발새발체': 'BASIC/온글잎_괴발새발체.zip',
        '온글잎_굥나무': 'BASIC/온글잎_굥나무.zip',
        '온글잎_굥이의_하루': 'BASIC/온글잎_굥이의_하루.zip',
        '온글잎_굥지': 'BASIC/온글잎_굥지.zip',
        '온글잎_구냥이': 'BASIC/온글잎_구냥이.zip',
        '온글잎_구름몽글이': 'BASIC/온글잎_구름몽글이.zip',
        '온글잎_구름서린체': 'BASIC/온글잎_구름서린체.zip',
        '온글잎_구름솜': 'BASIC/온글잎_구름솜.zip',
        '온글잎_구송남1호': 'BASIC/온글잎_구송남1호.zip',
        '온글잎_구월쓰': 'BASIC/온글잎_구월쓰.zip',
        '온글잎_구이씨단정체': 'BASIC/온글잎_구이씨단정체.zip',
        '온글잎_구이씨진지체': 'BASIC/온글잎_구이씨진지체.zip',
        '온글잎_궈니': 'BASIC/온글잎_궈니.zip',
        '온글잎_권먼지1': 'BASIC/온글잎_권먼지1.zip',
        '온글잎_권보연_스토리체': 'BASIC/온글잎_권보연_스토리체.zip',
        '온글잎_권성체': 'BASIC/온글잎_권성체.zip',
        '온글잎_권여사체': 'BASIC/온글잎_권여사체.zip',
        '온글잎_권재체': 'BASIC/온글잎_권재체.zip',
        '온글잎_권쥬체': 'BASIC/온글잎_권쥬체.zip',
        '온글잎_귀여워_윤지체': 'BASIC/온글잎_귀여워_윤지체.zip',
        '온글잎_귀염뽀짝': 'BASIC/온글잎_귀염뽀짝.zip',
        '온글잎_귀영굴림': 'BASIC/온글잎_귀영굴림.zip',
        '온글잎_규_채': 'BASIC/온글잎_규_채.zip',
        '온글잎_규니': 'BASIC/온글잎_규니.zip',
        '온글잎_규니꼬': 'BASIC/온글잎_규니꼬.zip',
        '온글잎_규림체': 'BASIC/온글잎_규림체.zip',
        '온글잎_규마에': 'BASIC/온글잎_규마에.zip',
        '온글잎_규진': 'BASIC/온글잎_규진.zip',
        '온글잎_균수': 'BASIC/온글잎_균수.zip',
        '온글잎_귤리쉬체': 'BASIC/온글잎_귤리쉬체.zip',
        '온글잎_귤모닝체': 'BASIC/온글잎_귤모닝체.zip',
        '온글잎_귤정식체': 'BASIC/온글잎_귤정식체.zip',
        '온글잎_귭': 'BASIC/온글잎_귭.zip',
        '온글잎_그램체': 'BASIC/온글잎_그램체.zip',
        '온글잎_그려두기': 'BASIC/온글잎_그려두기.zip',
        '온글잎_그려보람': 'BASIC/온글잎_그려보람.zip',
        '온글잎_근유00': 'BASIC/온글잎_근유00.zip',
        '온글잎_근육과미술': 'BASIC/온글잎_근육과미술.zip',
        '온글잎_글쓰는리아': 'BASIC/온글잎_글쓰는리아.zip',
        '온글잎_금강_계자할매체': 'BASIC/온글잎_금강_계자할매체.zip',
        '온글잎_금강_두애할매체': 'BASIC/온글잎_금강_두애할매체.zip',
        '온글잎_금강_맹숙할매체': 'BASIC/온글잎_금강_맹숙할매체.zip',
        '온글잎_금강_문자할매체': 'BASIC/온글잎_금강_문자할매체.zip',
        '온글잎_금강_영숙할매체': 'BASIC/온글잎_금강_영숙할매체.zip',
        '온글잎_금강_영순할매체': 'BASIC/온글잎_금강_영순할매체.zip',
        '온글잎_금강_옥희할매체': 'BASIC/온글잎_금강_옥희할매체.zip',
        '온글잎_금강_정애할매체': 'BASIC/온글잎_금강_정애할매체.zip',
        '온글잎_금강_효남할매체': 'BASIC/온글잎_금강_효남할매체.zip',
        '온글잎_금강_희제할매체': 'BASIC/온글잎_금강_희제할매체.zip',
        '온글잎_금경체': 'BASIC/온글잎_금경체.zip',
        '온글잎_금은동체': 'BASIC/온글잎_금은동체.zip',
        '온글잎_금천체': 'BASIC/온글잎_금천체.zip',
        '온글잎_급체': 'BASIC/온글잎_급체.zip',
        '온글잎_기기묘묘': 'BASIC/온글잎_기기묘묘.zip',
        '온글잎_기남아부라소바체': 'BASIC/온글잎_기남아부라소바체.zip',
        '온글잎_기란체': 'BASIC/온글잎_기란체.zip',
        '온글잎_기록친구리니': 'BASIC/온글잎_기록친구리니.zip',
        '온글잎_기롱': 'BASIC/온글잎_기롱.zip',
        '온글잎_기묘인재': 'BASIC/온글잎_기묘인재.zip',
        '온글잎_기사시험한번에합격체': 'BASIC/온글잎_기사시험한번에합격체.zip',
        '온글잎_기욱기본체': 'BASIC/온글잎_기욱기본체.zip',
        '온글잎_길도할미체': 'BASIC/온글잎_길도할미체.zip',
        '온글잎_김가지': 'BASIC/온글잎_김가지.zip',
        '온글잎_김갱체': 'BASIC/온글잎_김갱체.zip',
        '온글잎_김기현이올시다': 'BASIC/온글잎_김기현이올시다.zip',
        '온글잎_김까꿍': 'BASIC/온글잎_김까꿍.zip',
        '온글잎_김나리체': 'BASIC/온글잎_김나리체.zip',
        '온글잎_김다은손글씨체': 'BASIC/온글잎_김다은손글씨체.zip',
        '온글잎_김대석체': 'BASIC/온글잎_김대석체.zip',
        '온글잎_김둘기': 'BASIC/온글잎_김둘기.zip',
        '온글잎_김듀오': 'BASIC/온글잎_김듀오.zip',
        '온글잎_김로로': 'BASIC/온글잎_김로로.zip',
        '온글잎_김먼지_글씨체': 'BASIC/온글잎_김먼지_글씨체.zip',
        '온글잎_김뭉뭉': 'BASIC/온글잎_김뭉뭉.zip',
        '온글잎_김미소체': 'BASIC/온글잎_김미소체.zip',
        '온글잎_김미연': 'BASIC/온글잎_김미연.zip',
        '온글잎_김보람체': 'BASIC/온글잎_김보람체.zip',
        '온글잎_김선엽': 'BASIC/온글잎_김선엽.zip',
        '온글잎_김성만70체': 'BASIC/온글잎_김성만70체.zip',
        '온글잎_김수아': 'BASIC/온글잎_김수아.zip',
        '온글잎_김순덕체': 'BASIC/온글잎_김순덕체.zip',
        '온글잎_김영희': 'BASIC/온글잎_김영희.zip',
        '온글잎_김오리체': 'BASIC/온글잎_김오리체.zip',
        '온글잎_김윤정체': 'BASIC/온글잎_김윤정체.zip',
        '온글잎_김재유': 'BASIC/온글잎_김재유.zip',
        '온글잎_김재현': 'BASIC/온글잎_김재현.zip',
        '온글잎_김정우': 'BASIC/온글잎_김정우.zip',
        '온글잎_김정훈체': 'BASIC/온글잎_김정훈체.zip',
        '온글잎_김지연': 'BASIC/온글잎_김지연.zip',
        '온글잎_김진주펄킴체': 'BASIC/온글잎_김진주펄킴체.zip',
        '온글잎_김춘': 'BASIC/온글잎_김춘.zip',
        '온글잎_김치전체': 'BASIC/온글잎_김치전체.zip',
        '온글잎_김콩해': 'BASIC/온글잎_김콩해.zip',
        '온글잎_김택년체': 'BASIC/온글잎_김택년체.zip',
        '온글잎_김혜리폰트': 'BASIC/온글잎_김혜리폰트.zip',
        '온글잎_김홍도': 'BASIC/온글잎_김홍도.zip',
        '온글잎_김희나': 'BASIC/온글잎_김희나.zip',
        '온글잎_까꿍이체': 'BASIC/온글잎_까꿍이체.zip',
        '온글잎_까망연탄체': 'BASIC/온글잎_까망연탄체.zip',
        '온글잎_까탈수미의_까미체': 'BASIC/온글잎_까탈수미의_까미체.zip',
        '온글잎_깔끔_박쌤체': 'BASIC/온글잎_깔끔_박쌤체.zip',
        '온글잎_깔끔백체': 'BASIC/온글잎_깔끔백체.zip',
        '온글잎_꺄울': 'BASIC/온글잎_꺄울.zip',
        '온글잎_꺄의체': 'BASIC/온글잎_꺄의체.zip',
        '온글잎_꼬꼬쓰체': 'BASIC/온글잎_꼬꼬쓰체.zip',
        '온글잎_꼬둥': 'BASIC/온글잎_꼬둥.zip',
        '온글잎_꼬롱이': 'BASIC/온글잎_꼬롱이.zip',
        '온글잎_꼬리별': 'BASIC/온글잎_꼬리별.zip',
        '온글잎_꼬리부리': 'BASIC/온글잎_꼬리부리.zip',
        '온글잎_꼬마': 'BASIC/온글잎_꼬마.zip',
        '온글잎_꼬마쌤체': 'BASIC/온글잎_꼬마쌤체.zip',
        '온글잎_꼬미맘': 'BASIC/온글잎_꼬미맘.zip',
        '온글잎_꼰잎': 'BASIC/온글잎_꼰잎.zip',
        '온글잎_꼼': 'BASIC/온글잎_꼼.zip',
        '온글잎_꽃길만걷기를': 'BASIC/온글잎_꽃길만걷기를.zip',
        '온글잎_꽃물일기체': 'BASIC/온글잎_꽃물일기체.zip',
        '온글잎_꽃별': 'BASIC/온글잎_꽃별.zip',
        '온글잎_꽃샘글씨체': 'BASIC/온글잎_꽃샘글씨체.zip',
        '온글잎_꽃지니': 'BASIC/온글잎_꽃지니.zip',
        '온글잎_꾸기체': 'BASIC/온글잎_꾸기체.zip',
        '온글잎_꾸날체': 'BASIC/온글잎_꾸날체.zip',
        '온글잎_꾸드체': 'BASIC/온글잎_꾸드체.zip',
        '온글잎_꾸리꿀이체': 'BASIC/온글잎_꾸리꿀이체.zip',
        '온글잎_꾸불꾸불체': 'BASIC/온글잎_꾸불꾸불체.zip',
        '온글잎_꾸액맨': 'BASIC/온글잎_꾸액맨.zip',
        '온글잎_꿀복': 'BASIC/온글잎_꿀복.zip',
        '온글잎_꿈노랑': 'BASIC/온글잎_꿈노랑.zip',
        '온글잎_꿈이올라': 'BASIC/온글잎_꿈이올라.zip',
        '온글잎_끄멍': 'BASIC/온글잎_끄멍.zip',
        '온글잎_끼마': 'BASIC/온글잎_끼마.zip',
        '온글잎_낌꼬_손글씨': 'BASIC/온글잎_낌꼬_손글씨.zip',
        '온글잎_나_지금_홍서체야': 'BASIC/온글잎_나_지금_홍서체야.zip',
        '온글잎_나고체': 'BASIC/온글잎_나고체.zip',
        '온글잎_나글': 'BASIC/온글잎_나글.zip',
        '온글잎_나나_손글씨': 'BASIC/온글잎_나나_손글씨.zip',
        '온글잎_나는_미연이': 'BASIC/온글잎_나는_미연이.zip',
        '온글잎_나는오구': 'BASIC/온글잎_나는오구.zip',
        '온글잎_나는주연': 'BASIC/온글잎_나는주연.zip',
        '온글잎_나는하연': 'BASIC/온글잎_나는하연.zip',
        '온글잎_나도_할수있어': 'BASIC/온글잎_나도_할수있어.zip',
        '온글잎_나동이글짱체': 'BASIC/온글잎_나동이글짱체.zip',
        '온글잎_나료체': 'BASIC/온글잎_나료체.zip',
        '온글잎_나루일기': 'BASIC/온글잎_나루일기.zip',
        '온글잎_나무거울체': 'BASIC/온글잎_나무거울체.zip',
        '온글잎_나무그림체': 'BASIC/온글잎_나무그림체.zip',
        '온글잎_나뭇가지체': 'BASIC/온글잎_나뭇가지체.zip',
        '온글잎_나미체': 'BASIC/온글잎_나미체.zip',
        '온글잎_나뽕뽕': 'BASIC/온글잎_나뽕뽕.zip',
        '온글잎_나연': 'BASIC/온글잎_나연.zip',
        '온글잎_나영70체': 'BASIC/온글잎_나영70체.zip',
        '온글잎_나은아빠': 'BASIC/온글잎_나은아빠.zip',
        '온글잎_나의_엄마_영옥씨': 'BASIC/온글잎_나의_엄마_영옥씨.zip',
        '온글잎_나의글씨체': 'BASIC/온글잎_나의글씨체.zip',
        '온글잎_나이스원소니체': 'BASIC/온글잎_나이스원소니체.zip',
        '온글잎_나혀니2': 'BASIC/온글잎_나혀니2.zip',
        '온글잎_날린체': 'BASIC/온글잎_날린체.zip',
        '온글잎_날림요지': 'BASIC/온글잎_날림요지.zip',
        '온글잎_날백수': 'BASIC/온글잎_날백수.zip',
        '온글잎_남극곰체': 'BASIC/온글잎_남극곰체.zip',
        '온글잎_남이랑체': 'BASIC/온글잎_남이랑체.zip',
        '온글잎_남지체': 'BASIC/온글잎_남지체.zip',
        '온글잎_남해유록체': 'BASIC/온글잎_남해유록체.zip',
        '온글잎_남혜현_궁서체': 'BASIC/온글잎_남혜현_궁서체.zip',
        '온글잎_납나비': 'BASIC/온글잎_납나비.zip',
        '온글잎_내꺼야': 'BASIC/온글잎_내꺼야.zip',
        '온글잎_내왼손글씨': 'BASIC/온글잎_내왼손글씨.zip',
        '온글잎_내키는대로': 'BASIC/온글잎_내키는대로.zip',
        '온글잎_냉이체': 'BASIC/온글잎_냉이체.zip',
        '온글잎_냐앙': 'BASIC/온글잎_냐앙.zip',
        '온글잎_냥냥손글씨': 'BASIC/온글잎_냥냥손글씨.zip',
        '온글잎_너기체': 'BASIC/온글잎_너기체.zip',
        '온글잎_너기체_빅사이즈': 'BASIC/온글잎_너기체_빅사이즈.zip',
        '온글잎_넝이체': 'BASIC/온글잎_넝이체.zip',
        '온글잎_네멋대로행복하라': 'BASIC/온글잎_네멋대로행복하라.zip',
        '온글잎_네모반듯': 'BASIC/온글잎_네모반듯.zip',
        '온글잎_네모체': 'BASIC/온글잎_네모체.zip',
        '온글잎_네모하지': 'BASIC/온글잎_네모하지.zip',
        '온글잎_네몽': 'BASIC/온글잎_네몽.zip',
        '온글잎_네온아이디어': 'BASIC/온글잎_네온아이디어.zip',
        '온글잎_네지체': 'BASIC/온글잎_네지체.zip',
        '온글잎_넴모체': 'BASIC/온글잎_넴모체.zip',
        '온글잎_넹이32체': 'BASIC/온글잎_넹이32체.zip',
        '온글잎_노뚜': 'BASIC/온글잎_노뚜.zip',
        '온글잎_노뚜_일상': 'BASIC/온글잎_노뚜_일상.zip',
        '온글잎_노랑': 'BASIC/온글잎_노랑.zip',
        '온글잎_노랑치즈': 'BASIC/온글잎_노랑치즈.zip',
        '온글잎_노루심플': 'BASIC/온글잎_노루심플.zip',
        '온글잎_노슈니': 'BASIC/온글잎_노슈니.zip',
        '온글잎_뇽그리원체': 'BASIC/온글잎_뇽그리원체.zip',
        '온글잎_뇽쏘체': 'BASIC/온글잎_뇽쏘체.zip',
        '온글잎_누누체': 'BASIC/온글잎_누누체.zip',
        '온글잎_누히체': 'BASIC/온글잎_누히체.zip',
        '온글잎_눈솔체': 'BASIC/온글잎_눈솔체.zip',
        '온글잎_눈이오면체': 'BASIC/온글잎_눈이오면체.zip',
        '온글잎_눈탱밤탱': 'BASIC/온글잎_눈탱밤탱.zip',
        '온글잎_뉴리': 'BASIC/온글잎_뉴리.zip',
        '온글잎_뉴일': 'BASIC/온글잎_뉴일.zip',
        '온글잎_뉸재': 'BASIC/온글잎_뉸재.zip',
        '온글잎_느긋_날쌘돌이체': 'BASIC/온글잎_느긋_날쌘돌이체.zip',
        '온글잎_느긋_뭉치체': 'BASIC/온글잎_느긋_뭉치체.zip',
        '온글잎_느긋_화니체': 'BASIC/온글잎_느긋_화니체.zip',
        '온글잎_니가너무됴아체': 'BASIC/온글잎_니가너무됴아체.zip',
        '온글잎_니트': 'BASIC/온글잎_니트.zip',
        '온글잎_닌짱체': 'BASIC/온글잎_닌짱체.zip',


        // 'font2': 'AnotherFolder/another_font.zip',
        // 필요에 따라 링크 추가
      };

      var specificPath = specificPaths[linkType];
      if (specificPath) {
        var fullUrl = baseUrl + '/' + specificPath;
        window.location.href = fullUrl;
      } else {
        console.error('잘못된 링크 유형:', linkType);
      }
    }
