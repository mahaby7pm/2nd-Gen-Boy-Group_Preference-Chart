// 1. 그룹과 멤버 목록: 사용자가 지정한 한국어 이름을 그대로 사용합니다.
const groups = [
    { id: 'tvxq', name: '동방신기', members: ['유노윤호', '영웅재중', '믹키유천', '시아준수', '최강창민'] },
    { id: 'ss501', name: 'SS501', members: ['김현중', '허영생', '김규종', '박정민', '김형준'] },
    { id: 'superjunior', name: '슈퍼주니어', members: ['이특', '희철', '한경', '예성', '강인', '신동', '성민', '은혁', '시원', '조미', '동해', '려욱', '기범', '규현', '헨리'] },
    { id: 'bigbang', name: '빅뱅', members: ['지드래곤', '탑', '태양', '대성', '승리'] },
    { id: 'shinee', name: '샤이니', members: ['온유', '종현', '키', '민호', '태민'] },
    { id: 'ukiss', name: '유키스', members: ['수현', '알렉산더', '기범', '기섭', '일라이', 'AJ', '훈', '케빈', '동호', '준'] },
    { id: '2pm', name: '2PM', members: ['재범', '준케이', '닉쿤', '택연', '우영', '준호', '찬성'] },
    { id: 'mblaq', name: '엠블랙', members: ['승호', '지오', '이준', '천둥', '미르'] },
    { id: 'beast', name: '비스트', members: ['윤두준', '장현승', '용준형', '양요섭', '이기광', '손동운'] },
    { id: 'zea', name: '제국의아이들', members: ['문준영', '케빈', '황광희', '임시완', '김태헌', '정희철', '하민우', '박형식', '김동준'] },
    { id: 'infinite', name: '인피니트', members: ['성규', '동우', '우현', '호야', '성열', '엘', '성종'] },
    { id: 'teentop', name: '틴탑', members: ['캡', '천지', '엘조', '니엘', '리키', '창조'] },
    { id: 'blockb', name: '블락비', members: ['지코', '태일', '비범', '재효', '유권', '박경', '피오'] },
    { id: 'b1a4', name: 'B1A4', members: ['진영', '신우', '산들', '바로', '공찬'] },
    { id: 'boyfriend', name: '보이프렌드', members: ['동현', '현성', '정민', '영민', '광민', '민우'] }
];

// 2. 멤버 사진 연결: 예시 'tvxq:영웅재중': 'images/jaejoong.jpg'

const memberImages = {
    // ========================================
    // 동방신기 — MIROTIC (2008)
    // ========================================
    'tvxq:유노윤호': 'images/tvxq/yunho.jpg',
    'tvxq:영웅재중': 'images/tvxq/jaejoong.jpg',
    'tvxq:믹키유천': 'images/tvxq/yoochun.jpg',
    'tvxq:시아준수': 'images/tvxq/junsu.jpg',
    'tvxq:최강창민': 'images/tvxq/changmin.jpg',

    // ========================================
    // SS501
    // ========================================
    'ss501:김현중': 'images/ss501/김현중.jpg',
    'ss501:허영생': 'images/ss501/허영생.jpg',
    'ss501:김규종': 'images/ss501/김규종.jpg',
    'ss501:박정민': 'images/ss501/박정민.jpg',
    'ss501:김형준': 'images/ss501/김형준.jpg',

    // ========================================
    // 슈퍼주니어 — 15명
    // ========================================
    'superjunior:이특': 'images/superjunior/leeteuk.jpg',
    'superjunior:희철': 'images/superjunior/heechul.jpg',
    'superjunior:한경': 'images/superjunior/hangeng.jpg',
    'superjunior:예성': 'images/superjunior/yesung.jpg',
    'superjunior:강인': 'images/superjunior/kangin.jpg',
    'superjunior:신동': 'images/superjunior/shindong.jpg',
    'superjunior:성민': 'images/superjunior/sungmin.jpg',
    'superjunior:은혁': 'images/superjunior/eunhyuk.jpg',
    'superjunior:시원': 'images/superjunior/siwon.jpg',
    'superjunior:조미': 'images/superjunior/zhoumi.jpg',
    'superjunior:동해': 'images/superjunior/donghae.jpg',
    'superjunior:려욱': 'images/superjunior/ryeowook.jpg',
    'superjunior:기범': 'images/superjunior/kibum.jpg',
    'superjunior:규현': 'images/superjunior/kyuhyun.jpg',
    'superjunior:헨리': 'images/superjunior/henry.jpg',

    // 빅뱅 — MADE SERIES E (2015)
    'bigbang:탑': 'images/bigbang/top.jpg',
    'bigbang:태양': 'images/bigbang/taeyang.jpg',
    'bigbang:지드래곤': 'images/bigbang/gdragon.jpg',
    'bigbang:대성': 'images/bigbang/daesung.jpg',
    'bigbang:승리': 'images/bigbang/seungri.jpg',

    // 샤이니 — 1 and 1 (2016)
    'shinee:온유': 'images/shinee/onew.png',
    'shinee:종현': 'images/shinee/jonghyun.png',
    'shinee:키': 'images/shinee/key.png',
    'shinee:민호': 'images/shinee/minho.png',
    'shinee:태민': 'images/shinee/taemin.png',

    // 2PM — 2:00PM Time for Change (2009)
    '2pm:재범': 'images/2pm/jaebom.jpg',
    '2pm:준케이': 'images/2pm/jun-k.jpg',
    '2pm:닉쿤': 'images/2pm/nichkhun.jpg',
    '2pm:택연': 'images/2pm/taecyeon.jpg',
    '2pm:우영': 'images/2pm/wooyoung.jpg',
    '2pm:준호': 'images/2pm/junho.jpg',
    '2pm:찬성': 'images/2pm/chansung.jpg',

    // 엠블랙 — BROKEN (2014)
    'mblaq:승호': 'images/mblaq/seungho.jpg',
    'mblaq:지오': 'images/mblaq/go.jpg',
    'mblaq:이준': 'images/mblaq/leejoon.jpg',
    'mblaq:천둥': 'images/mblaq/thunder.jpg',
    'mblaq:미르': 'images/mblaq/mir.jpg',

    // 비스트 — Ordinary (2015)
    'beast:윤두준': 'images/beast/doojoon.jpg',
    'beast:장현승': 'images/beast/hyunseung.jpg',
    'beast:용준형': 'images/beast/junhyung.jpg',
    'beast:양요섭': 'images/beast/yoseob.jpg',
    'beast:이기광': 'images/beast/gikwang.jpg',
    'beast:손동운': 'images/beast/dongwoon.jpg',

    // 제국의아이들 — FIRST HOMME (2014)
    'zea:문준영': 'images/zea/junyoung.jpg',
    'zea:케빈': 'images/zea/kevin.jpg',
    'zea:황광희': 'images/zea/kwanghee.jpg',
    'zea:임시완': 'images/zea/siwan.jpg',
    'zea:김태헌': 'images/zea/taeheon.jpg',
    'zea:정희철': 'images/zea/heechul.jpg',
    'zea:하민우': 'images/zea/minwoo.jpg',
    'zea:박형식': 'images/zea/hyungsik.jpg',
    'zea:김동준': 'images/zea/dongjun.jpg',

    // 인피니트 — INFINITE ONLY (2016)
    'infinite:성규': 'images/infinite/sungkyu.jpg',
    'infinite:동우': 'images/infinite/dongwoo.jpg',
    'infinite:우현': 'images/infinite/woohyun.jpg',
    'infinite:호야': 'images/infinite/hoya.jpg',
    'infinite:성열': 'images/infinite/sungyeol.jpg',
    'infinite:엘': 'images/infinite/l.jpg',
    'infinite:성종': 'images/infinite/sungjong.jpg',

    // 틴탑 — RED POINT (2016)
    'teentop:캡': 'images/teentop/cap.png',
    'teentop:천지': 'images/teentop/chunji.png',
    'teentop:엘조': 'images/teentop/ljoe.png',
    'teentop:니엘': 'images/teentop/niel.png',
    'teentop:리키': 'images/teentop/ricky.png',
    'teentop:창조': 'images/teentop/changjo.png',

    // 블락비 — Re:MONTAGE (2018)
    'blockb:태일': 'images/blockb/taeil.jpg',
    'blockb:비범': 'images/blockb/bbomb.jpg',
    'blockb:재효': 'images/blockb/jaehyo.jpg',
    'blockb:유권': 'images/blockb/ukwon.jpg',
    'blockb:박경': 'images/blockb/parkkyung.jpg',
    'blockb:지코': 'images/blockb/zico.jpg',
    'blockb:피오': 'images/blockb/po.jpg',

    // B1A4 — Rollin' (2017)
    'b1a4:진영': 'images/b1a4/jinyoung.jpg',
    'b1a4:신우': 'images/b1a4/cnu.jpg',
    'b1a4:산들': 'images/b1a4/sandeul.jpg',
    'b1a4:바로': 'images/b1a4/baro.jpg',
    'b1a4:공찬': 'images/b1a4/gongchan.jpg',

    // 보이프렌드 — Boyager 6 (2026)
    'boyfriend:동현': 'images/boyfriend/donghyun.jpg',
    'boyfriend:현성': 'images/boyfriend/hyunseong.jpg',
    'boyfriend:정민': 'images/boyfriend/jeongmin.jpg',
    'boyfriend:영민': 'images/boyfriend/youngmin.jpg',
    'boyfriend:광민': 'images/boyfriend/kwangmin.jpg',
    'boyfriend:민우': 'images/boyfriend/minwoo.jpg',

    // 유키스 — CONTIKISS / MONO SCANDAL / AJ
    'ukiss:수현': 'images/ukiss/soohyun.jpg',
    'ukiss:알렉산더': 'images/ukiss/alexander.jpg',
    'ukiss:기범': 'images/ukiss/kibum.jpg',
    'ukiss:일라이': 'images/ukiss/eli.jpg',
    'ukiss:케빈': 'images/ukiss/kevin.jpg',
    'ukiss:기섭': 'images/ukiss/kiseop.jpg',
    'ukiss:동호': 'images/ukiss/dongho.jpg',
    'ukiss:훈': 'images/ukiss/hoon.jpg',
    'ukiss:준': 'images/ukiss/jun.jpg',
    'ukiss:AJ': 'images/ukiss/aj.jpg',
};

const STORAGE_KEY = 'idol-chart-v1'; // 기존 브라우저 저장 데이터 유지
const $ = id => document.getElementById(id);
let people = [];
let editingPersonId = null;

try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if (Array.isArray(saved)) people = saved;
} catch (error) {
    console.warn('저장 데이터 읽기 실패', error);
}

function save() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(people));
        return true;
    } catch (error) {
        alert('사진 용량이 너무 커서 저장할 수 없어요. 작은 사진을 사용해 주세요.');
        return false;
    }
}

function imgNode(src, className) {
    const img = document.createElement('img');
    img.src = src;
    img.className = className;
    img.alt = '';
    return img;
}

function placeholder(className = 'profile-photo') {
    const span = document.createElement('span');
    span.className = className + ' placeholder';

    if (className === 'profile-photo') {
        span.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24"
                 fill="none" stroke="#999999" stroke-width="1.3"
                 stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="7" r="3.5"></circle>
                <path d="M4.5 21v-2a7.5 7.5 0 0 1 15 0v2"></path>
            </svg>
        `;
    } else {
        span.textContent = '♡';
    }

    return span;
}

// 3. 전체 취향표 다시 그리기
function render() {
    const table = $('chart');
    table.replaceChildren();

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const corner = document.createElement('th');
    corner.className = 'corner';
    headerRow.append(corner);

    groups.forEach(group => {
        const th = document.createElement('th');
        th.textContent = group.name;
        headerRow.append(th);
    });
    thead.append(headerRow);
    table.append(thead);

    const tbody = document.createElement('tbody');
    people.forEach(person => {
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.append(person.photo ? imgNode(person.photo, 'profile-photo') : placeholder());

        const name = document.createElement('div');
        name.textContent = person.name;
        th.append(name);

        // 참여자 수정/삭제 버튼
        const actions = document.createElement('div');
        actions.className = 'profile-actions';

        const editButton = document.createElement('button');
        editButton.type = 'button';
        editButton.textContent = '수정';
        editButton.className = 'profile-edit';
        editButton.addEventListener('click', () => openEditProfile(person.id));

        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.textContent = '삭제';
        deleteButton.className = 'profile-delete';
        deleteButton.addEventListener('click', () => deletePerson(person.id));

        actions.append(editButton, deleteButton);
        th.append(actions);
        tr.append(th);

        groups.forEach(group => {
            const td = document.createElement('td');
            const button = document.createElement('button');
            button.className = 'cell';
            button.type = 'button';
            button.setAttribute('aria-label', `${person.name}의 ${group.name} 최애 선택`);

            const chosen = person.picks?.[group.id];
            if (chosen === '텅') {
                const span = document.createElement('span');
                span.className = 'none';
                span.textContent = '텅';
                button.append(span);
            } else if (chosen) {
                const image = memberImages[`${group.id}:${chosen}`];
                if (image) {
                    button.append(imgNode(image, ''));
                } else {
                    const span = document.createElement('span');
                    span.className = 'initial';
                    span.textContent = '♡';
                    button.append(span);
                }
                button.title = chosen;
            } else {
                const span = document.createElement('span');
                span.className = 'empty';
                span.textContent = '+';
                button.append(span);
            }

            button.addEventListener('click', () => openMembers(person.id, group.id));
            td.append(button);
            tr.append(td);
        });
        tbody.append(tr);
    });
    table.append(tbody);
}

// 4. 그룹별 멤버 선택창
function openMembers(personId, groupId) {
    const person = people.find(p => p.id === personId);
    const group = groups.find(g => g.id === groupId);
    if (!person || !group) return;

    $('member-title').textContent = group.name;
    const options = $('member-options');
    options.replaceChildren();

    [...group.members, '텅'].forEach(member => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'member-choice' +
            (person.picks?.[groupId] === member ? ' selected' : '');

        if (member === '텅') {
            const emptyText = document.createElement('div');
            emptyText.className = 'member-photo empty-choice-text';
            emptyText.textContent = '텅';
            button.append(emptyText);
        } else {
            const image = memberImages[`${groupId}:${member}`];
            button.append(
                image ? imgNode(image, 'member-photo') : placeholder('member-photo')
            );
        }

        if (member !== '텅') {
            const label = document.createElement('span');
            label.textContent = member;
            button.append(label);
        }

        button.addEventListener('click', () => {
            person.picks ??= {};
            const previous = person.picks[groupId];
            person.picks[groupId] = member;
            if (!save()) {
                if (previous === undefined) delete person.picks[groupId];
                else person.picks[groupId] = previous;
                return;
            }
            render();
            closeDialog($('member-dialog'));
        });
        options.append(button);
    });
    openDialog($('member-dialog'));
}

// 5. 참여자 추가 및 수정 (같은 폼 사용)
$('add-person').addEventListener('click', () => {
    editingPersonId = null;
    $('profile-form').reset();
    $('profile-title').textContent = '참여자 등록';
    $('profile-submit').textContent = '등록하기';
    $('remove-photo').checked = false;
    $('remove-photo-label').style.display = 'none';
    openDialog($('profile-dialog'));
});

function openEditProfile(personId) {
    const person = people.find(p => p.id === personId);
    if (!person) return;

    editingPersonId = personId;
    $('profile-title').textContent = '참여자 수정';
    $('profile-submit').textContent = '수정 완료';
    $('person-name').value = person.name;
    $('person-photo').value = ''; // 사진을 선택하지 않으면 기존 사진 유지
    $('remove-photo').checked = false;
    $('remove-photo-label').style.display = person.photo ? 'block' : 'none';
    openDialog($('profile-dialog'));
}

$('profile-form').addEventListener('submit', async event => {
    event.preventDefault();
    const name = $('person-name').value.trim();
    if (!name) return;

    const file = $('person-photo').files[0];
    let photo = '';
    if (file) {
        if (file.size > 1_000_000) {
            alert('1MB 이하의 사진을 사용해 주세요.');
            return;
        }
        try {
            photo = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        } catch (error) {
            alert('사진을 읽지 못했어요. 다른 사진으로 시도해 주세요.');
            return;
        }
    }

    if (editingPersonId) {
        const person = people.find(p => p.id === editingPersonId);
        if (!person) return;

        // 수정 전 정보 백업
        const oldName = person.name;
        const oldPhoto = person.photo;

        // 이름 수정
        person.name = name;

        // 기존 사진 삭제가 선택된 경우
        if ($('remove-photo').checked) {
            person.photo = '';
        }
        // 새 사진을 업로드한 경우
        else if (file) {
            person.photo = photo;
        }

        // 저장 실패 시 기존 정보 복구
        if (!save()) {
            person.name = oldName;
            person.photo = oldPhoto;
            return;
        }

    } else {
        // 신규 참여자 등록
        const newPerson = {
            id: makeId(),
            name: name,
            photo: photo,
            picks: {}
        };

        people.push(newPerson);

        // 저장 실패 시 추가한 참여자 제거
        if (!save()) {
            people.pop();
            return;
        }
    }

    render();
    closeDialog($('profile-dialog'));
    event.target.reset();
    editingPersonId = null;
});

// 6. 참여자 삭제 (선택 기록도 함께 삭제)
function deletePerson(personId) {
    const person = people.find(p => p.id === personId);
    if (!person) return;
    if (!confirm(`${person.name} 님을 삭제할까요?\n최애 선택 기록도 함께 삭제됩니다.`)) return;

    const previousPeople = people;
    people = people.filter(p => p.id !== personId);
    if (!save()) {
        people = previousPeople;
        return;
    }
    render();
}

// 7. 팝업 열고 닫기
function makeId() {
    return 'person-' + Date.now() + '-' + Math.random().toString(36).slice(2, 10);
}

function openDialog(dialog) {
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else {
        dialog.setAttribute('open', '');
        dialog.style.display = 'block';
    }

    // 멤버 선택 팝업을 열 때마다 스크롤을 맨 위로 초기화
    if (dialog.id === 'member-dialog') {
        const memberOptions = dialog.querySelector('.member-options');

        if (memberOptions) {
            memberOptions.scrollTop = 0;
        }
    }
}

function closeDialog(dialog) {
    if (typeof dialog.close === 'function' && dialog.open) dialog.close();
    else {
        dialog.removeAttribute('open');
        dialog.style.display = 'none';
    }
}

document.querySelectorAll('[data-close]').forEach(button => {
    button.addEventListener('click', () => closeDialog(button.closest('dialog')));
});

$('profile-dialog').addEventListener('close', () => {
    editingPersonId = null;
});



// 8. PNG 저장 — 실제 웹사이트 디자인에 맞춘 Canvas 방식

function loadImage(src) {
    return new Promise(resolve => {
        if (!src) return resolve(null);

        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = src;
    });
}

async function exportPng() {
    // 웹사이트 표의 기본 크기
    const cell = 116;
    const profileWidth = 120;
    const headerHeight = 60;
    const rowHeight = 136;
    const margin = 36;
    const titleAreaHeight = 115;

    const tableWidth = profileWidth + groups.length * cell;
    const width = tableWidth + margin * 2;
    const height =
        titleAreaHeight +
        headerHeight +
        people.length * rowHeight +
        margin;

    const canvas = document.createElement('canvas');
    const scale = 2;

    canvas.width = width * scale;
    canvas.height = height * scale;

    const c = canvas.getContext('2d');
    c.scale(scale, scale);

    // 전체 흰색 배경
    c.fillStyle = '#ffffff';
    c.fillRect(0, 0, width, height);

    c.textAlign = 'center';
    c.textBaseline = 'middle';

    // 둥근 사각형
    function roundedRect(x, y, w, h, radius = 7) {
        c.beginPath();
        c.roundRect(x, y, w, h, radius);
    }

    // 텍스트
    function drawText(
        text,
        x,
        y,
        size = 12,
        color = '#111111',
        weight = 'normal'
    ) {
        c.fillStyle = color;
        c.font = `${weight} ${size}px Arial, sans-serif`;
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.fillText(text, x, y);
    }

    // 사진을 정사각형 영역에 꽉 차게 배치
    // 원본 비율은 유지하고 넘치는 부분만 잘라냄
    function drawCoverImage(img, x, y, size, radius = 7) {
        const sourceWidth = img.naturalWidth || img.width;
        const sourceHeight = img.naturalHeight || img.height;

        if (!sourceWidth || !sourceHeight) return;

        const sourceSize = Math.min(sourceWidth, sourceHeight);
        const sx = (sourceWidth - sourceSize) / 2;
        const sy = (sourceHeight - sourceSize) / 2;

        c.save();
        roundedRect(x, y, size, size, radius);
        c.clip();

        c.drawImage(
            img,
            sx,
            sy,
            sourceSize,
            sourceSize,
            x,
            y,
            size,
            size
        );

        c.restore();
    }

    drawText('남돌 취향표', width / 2, 48, 36, '#111111', 'bold');
    drawText('@maxmajukee', width / 2, 82, 14, '#888888');

    const tableX = margin;
    const tableY = titleAreaHeight;

    // 그룹명
    groups.forEach((group, i) => {
        const x =
            tableX +
            profileWidth +
            i * cell +
            cell / 2;

        drawText(
            group.name,
            x,
            tableY + headerHeight / 2,
            12,
            '#111111'
        );
    });

    // 참여자별 행
    for (let pi = 0; pi < people.length; pi++) {
        const person = people[pi];

        const rowY =
            tableY +
            headerHeight +
            pi * rowHeight;

        const centerY = rowY + rowHeight / 2;

        // 참여자 프로필
        const profileX =
            tableX + profileWidth / 2;

        const profileImage = await loadImage(person.photo);

        if (profileImage) {
            drawCoverImage(
                profileImage,
                profileX - 36,
                centerY - 49,
                72,
                36
            );
        } else {
            // 프로필 사진이 없을 때 원형 배경과 하트
            c.fillStyle = '#f2f2f2';
            c.beginPath();
            c.arc(profileX, centerY - 13, 36, 0, Math.PI * 2);
            c.fill();

            // 기본 프로필 사람 아이콘
            c.save();
            c.strokeStyle = '#999999';
            c.lineWidth = 1.8;
            c.lineCap = 'round';
            c.lineJoin = 'round';

            const iconX = profileX;
            const iconY = centerY - 13;

            // 머리
            c.beginPath();
            c.arc(iconX, iconY - 7, 5, 0, Math.PI * 2);
            c.stroke();

            // 어깨와 상반신
            c.beginPath();
            c.arc(iconX, iconY + 12, 11, Math.PI, 0);
            c.stroke();

            c.restore();
        }

        // 참여자 이름
        drawText(
            person.name,
            profileX,
            centerY + 39,
            15,
            '#111111'
        );

        // 그룹별 선택 결과
        for (let gi = 0; gi < groups.length; gi++) {
            const group = groups[gi];
            const choice = person.picks?.[group.id];

            const cellX =
                tableX +
                profileWidth +
                gi * cell;

            const imageSize = 104;

            const imageX =
                cellX + (cell - imageSize) / 2;

            const imageY =
                centerY - imageSize / 2;

            if (choice === '텅') {
                drawText(
                    '텅',
                    cellX + cell / 2,
                    centerY,
                    22,
                    '#111111',
                    'bold'
                );
            } else if (choice) {
                const imagePath =
                    memberImages[`${group.id}:${choice}`];

                const memberImage = await loadImage(imagePath);

                if (memberImage) {
                    drawCoverImage(
                        memberImage,
                        imageX,
                        imageY,
                        imageSize,
                        7
                    );
                } else {
                    drawText(
                        '♡',
                        cellX + cell / 2,
                        centerY,
                        23,
                        '#aaaaaa'
                    );
                }
            } else {
                // 선택하지 않은 칸
                drawText(
                    '+',
                    cellX + cell / 2,
                    centerY,
                    20,
                    '#dddddd',
                    'bold'
                );
            }
        }
    }

    // PNG 다운로드
    canvas.toBlob(blob => {
        if (!blob) {
            alert('PNG 생성에 실패했어요.');
            return;
        }

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');

        a.href = url;
        a.download = '남돌-취향표.png';

        document.body.append(a);
        a.click();
        a.remove();

        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }, 'image/png');
}

$('save-image').addEventListener('click', () => {
    exportPng().catch(error => {
        console.error(error);
        alert('PNG 저장 중 오류가 발생했어요.');
    });
});

// 처음 페이지를 열 때 표 생성
render();
