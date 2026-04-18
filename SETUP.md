# Google Sheets 連携セットアップ

## Step 1: スプレッドシートを作成
1. [Google Sheets](https://sheets.new) で新しいスプレッドシートを作成
2. シート名を `journal` に変更（下のタブを右クリック→名前変更）
3. 1行目に以下のヘッダーを入力：

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| timestamp | type | mood | score | text | tomorrow |

## Step 2: Apps Script を設置
1. メニュー → **拡張機能** → **Apps Script** をクリック
2. エディタの内容をすべて削除して、`gas-code.js` の内容を貼り付け
3. **保存**（Ctrl+S）

## Step 3: Web アプリとしてデプロイ
1. 右上の **デプロイ** → **新しいデプロイ**
2. 種類の選択 → **ウェブアプリ**
3. 設定:
   - 説明: `Journal API`
   - 次のユーザーとして実行: **自分**
   - アクセスできるユーザー: **全員**
4. **デプロイ** をクリック
5. **アクセスを承認** → 自分のGoogleアカウントを選択
6. 「このアプリは確認されていません」→ **詳細** → **（安全でない）に移動**
7. **許可**
8. 表示された **URL をコピー**

## Step 4: journal.html に URL を設定
1. `journal.html` をエディタで開く
2. 先頭付近の `const GAS_URL = '';` に Step 3 でコピーしたURLを貼り付け

```
const GAS_URL = 'https://script.google.com/macros/s/xxxxx/exec';
```

3. ブラウザで開いて使い始める！

## 確認
- スプレッドシートに記録が追加されることを確認
- localStorageにもバックアップとして保存されます
