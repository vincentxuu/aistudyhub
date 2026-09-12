---
title: "AWS Certified AI Practitioner (AIF-C01) v1.1 — 第 3 回"
subtitle: "65 題進階情境模擬｜BEST / MOST appropriate / LEAST operational overhead"
language: "zh-TW"
exam_code: "AIF-C01"
set: 3
---

# ☁️ AWS Certified AI Practitioner (AIF-C01) v1.1
## 第 3 回｜65 題進階情境題

> **這一回的設計重點**：比前兩回更偏 AWS 正式考試常見的判斷語氣，例如  
> **BEST、MOST appropriate、MOST cost-effective、LEAST operational overhead、FIRST**。  
> 不只問「這是什麼」，而是練習從限制條件中找出**最佳答案**。

### 建議作答方式
1. 第一次先不要展開 Hint / 答案。
2. 題幹先圈出：**資料型態、更新頻率、成本、latency、安全風險、維運需求**。
3. 遇到兩個都合理的選項，選**最符合題目限制**的那個。
4. 完成後再看「⚠️ AWS 考試陷阱」。

---

# Domain 1 — Fundamentals of AI and ML

## Question 1

> **⭐** · 🎯 **Regression**

某企業情境如下：**預測下個月每家門市的實際銷售金額**。哪個選項 MOST appropriate？

A. Reinforcement learning  
B. Regression  
C. Classification  
D. Clustering  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Regression**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. Regression**

</details>

<details>
<summary>📘 詳解</summary>

輸出是連續數值，因此 regression 最適合。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 傳統 ML 題先判斷輸出型態、是否有標籤，以及 train/test 表現。

<details>
<summary>🧠 記憶口訣</summary>

**連續數值 → Regression**

</details>

---

## Question 2

> **⭐** · 🎯 **Recall**

某企業情境如下：**癌症篩檢系統最不能接受漏掉真正患者**。哪個選項 MOST appropriate？

A. Accuracy  
B. R-squared  
C. Recall  
D. Precision  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Recall**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**C. Recall**

</details>

<details>
<summary>📘 詳解</summary>

False Negative 成本高時，優先提高 Recall。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 傳統 ML 題先判斷輸出型態、是否有標籤，以及 train/test 表現。

<details>
<summary>🧠 記憶口訣</summary>

**怕漏正例 → Recall**

</details>

---

## Question 3

> **⭐⭐** · 🎯 **Clustering**

某企業情境如下：**沒有標籤的會員依行為自動分群**。哪個選項 MOST appropriate？

A. Supervised classification  
B. Regression  
C. Reinforcement learning  
D. Clustering  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Clustering**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**D. Clustering**

</details>

<details>
<summary>📘 詳解</summary>

沒有標籤又要分群，是 unsupervised clustering。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 傳統 ML 題先判斷輸出型態、是否有標籤，以及 train/test 表現。

<details>
<summary>🧠 記憶口訣</summary>

**沒標籤 + 分群 → Clustering**

</details>

---

## Question 4

> **⭐** · 🎯 **Overfitting**

某企業情境如下：**training 99% 但 test 只有 67%**。哪個選項 MOST appropriate？

A. 增加代表性資料並使用 regularization  
B. Classification  
C. Clustering  
D. Amazon Polly  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Overfitting**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**A. 增加代表性資料並使用 regularization**

</details>

<details>
<summary>📘 詳解</summary>

Train 好、Test 差是典型 overfitting。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 傳統 ML 題先判斷輸出型態、是否有標籤，以及 train/test 表現。

<details>
<summary>🧠 記憶口訣</summary>

**Train 好 Test 差 → Overfit**

</details>

---

## Question 5

> **⭐⭐⭐** · 🎯 **Amazon Textract**

某企業情境如下：**從掃描理賠表擷取文字、表格與欄位**。哪個選項 MOST appropriate？

A. Amazon Polly  
B. Amazon Textract  
C. Amazon Rekognition  
D. Amazon Comprehend  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Amazon Textract**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. Amazon Textract**

</details>

<details>
<summary>📘 詳解</summary>

Textract 適合文件文字、表格與表單結構擷取。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 傳統 ML 題先判斷輸出型態、是否有標籤，以及 train/test 表現。

<details>
<summary>🧠 記憶口訣</summary>

**掃描文件 → Textract**

</details>

---

## Question 6

> **⭐⭐** · 🎯 **Amazon Transcribe**

某企業情境如下：**將客服電話錄音轉成可搜尋文字**。哪個選項 MOST appropriate？

A. Amazon Polly  
B. Amazon Lex  
C. Amazon Transcribe  
D. Amazon Translate  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Amazon Transcribe**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**C. Amazon Transcribe**

</details>

<details>
<summary>📘 詳解</summary>

Transcribe 是 speech-to-text 受管服務。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 傳統 ML 題先判斷輸出型態、是否有標籤，以及 train/test 表現。

<details>
<summary>🧠 記憶口訣</summary>

**聲音→文字 = Transcribe**

</details>

---

## Question 7

> **⭐** · 🎯 **Amazon Comprehend**

某企業情境如下：**不訓練模型直接分析大量評論 sentiment**。哪個選項 MOST appropriate？

A. Amazon Polly  
B. Amazon Rekognition  
C. Amazon Transcribe  
D. Amazon Comprehend  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Amazon Comprehend**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**D. Amazon Comprehend**

</details>

<details>
<summary>📘 詳解</summary>

Comprehend 提供 fully managed NLP 與 sentiment analysis。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 傳統 ML 題先判斷輸出型態、是否有標籤，以及 train/test 表現。

<details>
<summary>🧠 記憶口訣</summary>

**Sentiment → Comprehend**

</details>

---

## Question 8

> **⭐** · 🎯 **Class imbalance**

某企業情境如下：**詐欺只占 1%，要評估真正詐欺被抓到多少**。哪個選項 MOST appropriate？

A. Recall  
B. Precision  
C. Accuracy  
D. R-squared  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Class imbalance**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**A. Recall**

</details>

<details>
<summary>📘 詳解</summary>

不平衡分類且關心少數正例被抓到多少，Recall 比 Accuracy 更有意義。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 傳統 ML 題先判斷輸出型態、是否有標籤，以及 train/test 表現。

<details>
<summary>🧠 記憶口訣</summary>

**少數正例別只看 Accuracy**

</details>

---

## Question 9

> **⭐⭐** · 🎯 **Data splits**

某企業情境如下：**調參時使用一份資料，最後另留一份做獨立評估**。哪個選項 MOST appropriate？

A. Feature store  
B. Test set  
C. Validation set  
D. Training set  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Data splits**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. Test set**

</details>

<details>
<summary>📘 詳解</summary>

Test set 應保留到最後做 unbiased evaluation。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 傳統 ML 題先判斷輸出型態、是否有標籤，以及 train/test 表現。

<details>
<summary>🧠 記憶口訣</summary>

**Train 學、Val 調、Test 考**

</details>

---

## Question 10

> **⭐⭐⭐** · 🎯 **Amazon Rekognition**

某企業情境如下：**辨識倉庫照片中的箱子與叉車**。哪個選項 MOST appropriate？

A. Amazon Textract  
B. Amazon Polly  
C. Amazon Rekognition  
D. Amazon Comprehend  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Amazon Rekognition**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**C. Amazon Rekognition**

</details>

<details>
<summary>📘 詳解</summary>

Rekognition 提供受管影像與影片分析。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 傳統 ML 題先判斷輸出型態、是否有標籤，以及 train/test 表現。

<details>
<summary>🧠 記憶口訣</summary>

**影像 → Rekognition**

</details>

---

## Question 11

> **⭐** · 🎯 **Underfitting**

某企業情境如下：**training 與 validation 表現都很差**。哪個選項 MOST appropriate？

A. Classification  
B. Clustering  
C. Amazon Polly  
D. Underfitting / high bias  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Underfitting**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**D. Underfitting / high bias**

</details>

<details>
<summary>📘 詳解</summary>

連 training 都學不好，通常是 underfitting。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 傳統 ML 題先判斷輸出型態、是否有標籤，以及 train/test 表現。

<details>
<summary>🧠 記憶口訣</summary>

**Train 都差 → Underfit**

</details>

---

## Question 12

> **⭐⭐** · 🎯 **SageMaker AI**

某企業情境如下：**完整控制 custom ML 的訓練、調參與部署**。哪個選項 MOST appropriate？

A. Amazon SageMaker AI  
B. Amazon Bedrock Guardrails  
C. AWS Artifact  
D. Amazon Translate  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**SageMaker AI**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**A. Amazon SageMaker AI**

</details>

<details>
<summary>📘 詳解</summary>

SageMaker AI 適合完整 custom ML lifecycle。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 傳統 ML 題先判斷輸出型態、是否有標籤，以及 train/test 表現。

<details>
<summary>🧠 記憶口訣</summary>

**自訂 ML → SageMaker**

</details>

---

## Question 13

> **⭐⭐⭐** · 🎯 **Data leakage**

某企業情境如下：**training 使用 production 時根本不會知道的答案線索**。哪個選項 MOST appropriate？

A. Amazon Polly  
B. Data leakage  
C. Classification  
D. Clustering  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Data leakage**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. Data leakage**

</details>

<details>
<summary>📘 詳解</summary>

訓練偷看到推論時不存在的資訊會造成 leakage。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 傳統 ML 題先判斷輸出型態、是否有標籤，以及 train/test 表現。

<details>
<summary>🧠 記憶口訣</summary>

**訓練偷看答案 → Leakage**

</details>

---


# Domain 2 — Fundamentals of Generative AI

## Question 14

> **⭐** · 🎯 **Token pricing**

某企業情境如下：**估算依 input/output tokens 計費的 API 成本**。哪個選項 MOST appropriate？

A. 提高 temperature  
B. Amazon Rekognition  
C. 平均 input/output token 數與各自單價  
D. Fine-tuning  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Token pricing**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**C. 平均 input/output token 數與各自單價**

</details>

<details>
<summary>📘 詳解</summary>

成本取決於 token 使用量與對應價格。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> GenAI 題常同時考品質、token 成本、context 與輸出穩定性。

<details>
<summary>🧠 記憶口訣</summary>

**Token 數 × 單價**

</details>

---

## Question 15

> **⭐⭐⭐** · 🎯 **Context optimization**

某企業情境如下：**問題只涉及手冊一小段卻每次傳整本手冊**。哪個選項 MOST appropriate？

A. Fine-tuning  
B. 提高 temperature  
C. Amazon Rekognition  
D. 只檢索並傳入必要片段  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Context optimization**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**D. 只檢索並傳入必要片段**

</details>

<details>
<summary>📘 詳解</summary>

精簡 context 可降低成本與雜訊。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> GenAI 題常同時考品質、token 成本、context 與輸出穩定性。

<details>
<summary>🧠 記憶口訣</summary>

**只給需要知道的**

</details>

---

## Question 16

> **⭐** · 🎯 **Temperature**

某企業情境如下：**廣告文案希望每次更有創意與差異**。哪個選項 MOST appropriate？

A. 提高 temperature  
B. Fine-tuning  
C. Amazon Rekognition  
D. AWS Artifact  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Temperature**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**A. 提高 temperature**

</details>

<details>
<summary>📘 詳解</summary>

較高 temperature 通常提高輸出多樣性。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> GenAI 題常同時考品質、token 成本、context 與輸出穩定性。

<details>
<summary>🧠 記憶口訣</summary>

**創意高溫**

</details>

---

## Question 17

> **⭐** · 🎯 **Temperature**

某企業情境如下：**財務摘要要求同一輸入盡量一致**。哪個選項 MOST appropriate？

A. Amazon Rekognition  
B. 降低 temperature  
C. Fine-tuning  
D. 提高 temperature  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Temperature**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. 降低 temperature**

</details>

<details>
<summary>📘 詳解</summary>

較低 temperature 通常使輸出更穩定。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> GenAI 題常同時考品質、token 成本、context 與輸出穩定性。

<details>
<summary>🧠 記憶口訣</summary>

**穩定低溫**

</details>

---

## Question 18

> **⭐⭐** · 🎯 **Embeddings**

某企業情境如下：**搜尋用詞不同但語意相近的文件**。哪個選項 MOST appropriate？

A. Amazon Polly  
B. IAM policies  
C. Embeddings + vector similarity  
D. Keyword exact match only  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Embeddings**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**C. Embeddings + vector similarity**

</details>

<details>
<summary>📘 詳解</summary>

Embedding 可表示語意並進行相似度搜尋。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> GenAI 題常同時考品質、token 成本、context 與輸出穩定性。

<details>
<summary>🧠 記憶口訣</summary>

**意思近 → 向量近**

</details>

---

## Question 19

> **⭐** · 🎯 **Chunking**

某企業情境如下：**RAG chunks 太大且包含多個無關主題**。哪個選項 MOST appropriate？

A. Fine-tuning  
B. 提高 temperature  
C. Amazon Rekognition  
D. 縮小並依語意邊界重新 chunk  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Chunking**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**D. 縮小並依語意邊界重新 chunk**

</details>

<details>
<summary>📘 詳解</summary>

過大的 chunk 會帶入無關內容並浪費 context。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> GenAI 題常同時考品質、token 成本、context 與輸出穩定性。

<details>
<summary>🧠 記憶口訣</summary>

**太大雜訊；太小缺上下文**

</details>

---

## Question 20

> **⭐⭐⭐** · 🎯 **Zero-shot**

某企業情境如下：**只有任務指令，沒有任何示例**。哪個選項 MOST appropriate？

A. Zero-shot prompting  
B. Fine-tuning  
C. 提高 temperature  
D. Amazon Rekognition  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Zero-shot**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**A. Zero-shot prompting**

</details>

<details>
<summary>📘 詳解</summary>

Zero-shot 不提供 examples。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> GenAI 題常同時考品質、token 成本、context 與輸出穩定性。

<details>
<summary>🧠 記憶口訣</summary>

**Zero-shot = 0 例子**

</details>

---

## Question 21

> **⭐⭐** · 🎯 **Few-shot**

某企業情境如下：**prompt 裡放三組輸入與理想輸出但不更新權重**。哪個選項 MOST appropriate？

A. Amazon Rekognition  
B. Few-shot prompting  
C. Fine-tuning  
D. 提高 temperature  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Few-shot**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. Few-shot prompting**

</details>

<details>
<summary>📘 詳解</summary>

Few-shot 是 in-context examples，不修改模型權重。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> GenAI 題常同時考品質、token 成本、context 與輸出穩定性。

<details>
<summary>🧠 記憶口訣</summary>

**例子放 Prompt → Few-shot**

</details>

---

## Question 22

> **⭐** · 🎯 **Multimodal**

某企業情境如下：**同時理解產品照片與文字問題**。哪個選項 MOST appropriate？

A. 提高 temperature  
B. Amazon Rekognition  
C. Multimodal foundation model  
D. Fine-tuning  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Multimodal**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**C. Multimodal foundation model**

</details>

<details>
<summary>📘 詳解</summary>

Multimodal model 能處理多種資料模態。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> GenAI 題常同時考品質、token 成本、context 與輸出穩定性。

<details>
<summary>🧠 記憶口訣</summary>

**文字+圖片 → Multimodal**

</details>

---

## Question 23

> **⭐** · 🎯 **Hallucination**

某企業情境如下：**模型捏造不存在的退款政策**。哪個選項 MOST appropriate？

A. Fine-tuning  
B. 提高 temperature  
C. Amazon Rekognition  
D. Hallucination  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Hallucination**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**D. Hallucination**

</details>

<details>
<summary>📘 詳解</summary>

看似合理但無事實依據的生成內容是 hallucination。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> GenAI 題常同時考品質、token 成本、context 與輸出穩定性。

<details>
<summary>🧠 記憶口訣</summary>

**自信亂講 → Hallucination**

</details>

---

## Question 24

> **⭐⭐** · 🎯 **MCP**

某企業情境如下：**希望 agent 用標準方式串接多個工具與資料來源**。哪個選項 MOST appropriate？

A. Model Context Protocol (MCP)  
B. Fine-tuning  
C. Amazon Macie  
D. Mean squared error  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**MCP**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**A. Model Context Protocol (MCP)**

</details>

<details>
<summary>📘 詳解</summary>

MCP 標準化 AI 應用與工具/資料的連接方式。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> GenAI 題常同時考品質、token 成本、context 與輸出穩定性。

<details>
<summary>🧠 記憶口訣</summary>

**MCP = AI 工具標準插座**

</details>

---

## Question 25

> **⭐⭐⭐** · 🎯 **Agentic AI**

某企業情境如下：**AI 會規劃、查工具、觀察結果再重新規劃**。哪個選項 MOST appropriate？

A. Simple embedding generation  
B. Agentic AI  
C. Static classification  
D. Batch OCR  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Agentic AI**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. Agentic AI**

</details>

<details>
<summary>📘 詳解</summary>

規劃、工具使用與多步執行是 agentic AI 特徵。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> GenAI 題常同時考品質、token 成本、context 與輸出穩定性。

<details>
<summary>🧠 記憶口訣</summary>

**會規劃會行動 → Agent**

</details>

---

## Question 26

> **⭐** · 🎯 **Multi-agent**

某企業情境如下：**研究、驗證、撰寫 agents 重複做相同工作**。哪個選項 MOST appropriate？

A. 增加 agents 但不共享狀態  
B. Amazon Polly  
C. Orchestration / coordination  
D. 提高 temperature  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Multi-agent**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**C. Orchestration / coordination**

</details>

<details>
<summary>📘 詳解</summary>

多 agent 需要協調、共享狀態與任務分配。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> GenAI 題常同時考品質、token 成本、context 與輸出穩定性。

<details>
<summary>🧠 記憶口訣</summary>

**多 Agent 要交通指揮**

</details>

---

## Question 27

> **⭐⭐⭐** · 🎯 **Context engineering**

某企業情境如下：**管理檢索文件、歷史、工具結果、記憶與狀態**。哪個選項 MOST appropriate？

A. Fine-tuning  
B. 提高 temperature  
C. Amazon Rekognition  
D. Context engineering  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Context engineering**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**D. Context engineering**

</details>

<details>
<summary>📘 詳解</summary>

它管理模型執行任務時可見的完整資訊環境。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> GenAI 題常同時考品質、token 成本、context 與輸出穩定性。

<details>
<summary>🧠 記憶口訣</summary>

**Prompt 是指令；Context 是工作桌**

</details>

---

## Question 28

> **⭐** · 🎯 **Prompt caching**

某企業情境如下：**大量請求重複使用相同的超長 system context**。哪個選項 MOST appropriate？

A. Prompt caching  
B. Fine-tuning  
C. 提高 temperature  
D. Amazon Rekognition  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Prompt caching**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**A. Prompt caching**

</details>

<details>
<summary>📘 詳解</summary>

快取重複前綴可降低重複處理成本與 latency。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> GenAI 題常同時考品質、token 成本、context 與輸出穩定性。

<details>
<summary>🧠 記憶口訣</summary>

**重複 Prompt → Cache**

</details>

---

## Question 29

> **⭐** · 🎯 **Prompt strategy**

某企業情境如下：**已有少量範例，只需固定 JSON 格式且預算有限**。哪個選項 MOST appropriate？

A. Amazon Rekognition  
B. Few-shot prompting + 明確格式指令  
C. Fine-tuning  
D. 提高 temperature  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Prompt strategy**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. Few-shot prompting + 明確格式指令**

</details>

<details>
<summary>📘 詳解</summary>

先用低成本 prompting，必要時才進一步訓練。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> GenAI 題常同時考品質、token 成本、context 與輸出穩定性。

<details>
<summary>🧠 記憶口訣</summary>

**先 Prompt，後 Training**

</details>

---


# Domain 3 — Applications of Foundation Models

## Question 30

> **⭐⭐⭐** · 🎯 **RAG**

某企業情境如下：**HR 政策每週更新且 chatbot 必須使用最新版**。哪個選項 MOST appropriate？

A. 提高 temperature  
B. 從零訓練 FM  
C. RAG  
D. Fine-tuning every update  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**RAG**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**C. RAG**

</details>

<details>
<summary>📘 詳解</summary>

RAG 可在推論時取得最新外部知識，無需頻繁重訓。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**常變知識 → RAG**

</details>

---

## Question 31

> **⭐⭐⭐** · 🎯 **Grounding**

某企業情境如下：**RAG 找到正確文件但模型仍自行補充不存在內容**。哪個選項 MOST appropriate？

A. 每天從零訓練 foundation model  
B. 提高 temperature  
C. AWS Artifact  
D. 要求僅依 retrieved evidence 回答，無證據時說不知道  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Grounding**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**D. 要求僅依 retrieved evidence 回答，無證據時說不知道**

</details>

<details>
<summary>📘 詳解</summary>

Grounded prompting 可降低無依據生成。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**沒證據 → 說不知道**

</details>

---

## Question 32

> **⭐** · 🎯 **Continued pre-training**

某企業情境如下：**希望模型吸收大量法律領域語料與專業術語**。哪個選項 MOST appropriate？

A. Continued pre-training  
B. Prompt caching  
C. 只調 temperature  
D. IAM policy  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Continued pre-training**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**A. Continued pre-training**

</details>

<details>
<summary>📘 詳解</summary>

適合進一步學習大量 domain corpus。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**大量領域語料 → Continued pre-training**

</details>

---

## Question 33

> **⭐⭐** · 🎯 **Fine-tuning**

某企業情境如下：**數千個高品質範例，要模型穩定使用品牌語氣**。哪個選項 MOST appropriate？

A. Amazon Macie  
B. Fine-tuning  
C. RAG only  
D. Prompt caching  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Fine-tuning**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. Fine-tuning**

</details>

<details>
<summary>📘 詳解</summary>

Fine-tuning 適合調整穩定行為、風格與任務表現。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**改行為風格 → Fine-tuning**

</details>

---

## Question 34

> **⭐** · 🎯 **Model selection**

某企業情境如下：**兩模型都達品質門檻，其中一個成本只有三成**。哪個選項 MOST appropriate？

A. 提高 temperature  
B. AWS Artifact  
C. 選擇較便宜且已達門檻的模型  
D. 每天從零訓練 foundation model  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Model selection**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**C. 選擇較便宜且已達門檻的模型**

</details>

<details>
<summary>📘 詳解</summary>

模型選型要平衡品質、成本與 latency。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**先達標，再比成本**

</details>

---

## Question 35

> **⭐⭐⭐** · 🎯 **Latency optimization**

某企業情境如下：**chatbot 品質足夠但尖峰回應太慢**。哪個選項 MOST appropriate？

A. 每天從零訓練 foundation model  
B. 提高 temperature  
C. AWS Artifact  
D. 使用較小模型、精簡 context 或 caching  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Latency optimization**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**D. 使用較小模型、精簡 context 或 caching**

</details>

<details>
<summary>📘 詳解</summary>

在品質已達標時應優化 inference efficiency。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**品質夠 → 優化速度**

</details>

---

## Question 36

> **⭐⭐** · 🎯 **Bedrock Knowledge Bases**

某企業情境如下：**希望 Bedrock 管理 RAG 資料來源與 retrieval**。哪個選項 MOST appropriate？

A. Knowledge Bases for Amazon Bedrock  
B. AWS Artifact  
C. Amazon Inspector  
D. Amazon Polly  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Bedrock Knowledge Bases**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**A. Knowledge Bases for Amazon Bedrock**

</details>

<details>
<summary>📘 詳解</summary>

Bedrock Knowledge Bases 支援 RAG 的 ingestion 與 retrieval。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**Bedrock KB = RAG 知識層**

</details>

---

## Question 37

> **⭐** · 🎯 **Prompt Management**

某企業情境如下：**production prompts 要版本化、測試與回滾**。哪個選項 MOST appropriate？

A. Amazon Inspector  
B. Amazon Bedrock Prompt Management  
C. Amazon Macie  
D. AWS Config  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Prompt Management**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. Amazon Bedrock Prompt Management**

</details>

<details>
<summary>📘 詳解</summary>

Prompt Management 支援 prompt lifecycle 與版本管理。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**Prompt 版本 → Prompt Management**

</details>

---

## Question 38

> **⭐** · 🎯 **Vector store**

某企業情境如下：**需要語意檢索大量 embeddings**。哪個選項 MOST appropriate？

A. 提高 temperature  
B. AWS Artifact  
C. 支援 vector search 的資料庫或搜尋服務  
D. 每天從零訓練 foundation model  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Vector store**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**C. 支援 vector search 的資料庫或搜尋服務**

</details>

<details>
<summary>📘 詳解</summary>

RAG retrieval 需要能儲存/搜尋向量的後端。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**Embedding 要有 Vector Store**

</details>

---

## Question 39

> **⭐⭐** · 🎯 **Human-in-the-loop**

某企業情境如下：**agent 即將執行不可逆的大額付款**。哪個選項 MOST appropriate？

A. 每天從零訓練 foundation model  
B. 提高 temperature  
C. AWS Artifact  
D. 在付款前加入人工核准  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Human-in-the-loop**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**D. 在付款前加入人工核准**

</details>

<details>
<summary>📘 詳解</summary>

高風險、不可逆操作適合 human approval。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**高風險行動 → 人工關卡**

</details>

---

## Question 40

> **⭐⭐⭐** · 🎯 **Citations**

某企業情境如下：**希望 RAG 回答可以被使用者驗證**。哪個選項 MOST appropriate？

A. 顯示來源引用與相關片段  
B. 每天從零訓練 foundation model  
C. 提高 temperature  
D. AWS Artifact  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Citations**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**A. 顯示來源引用與相關片段**

</details>

<details>
<summary>📘 詳解</summary>

Source attribution 提升可追溯性與信任。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**可驗證 → 引用來源**

</details>

---

## Question 41

> **⭐** · 🎯 **Retrieval quality**

某企業情境如下：**RAG 常找到語意相近但實際不相關的內容**。哪個選項 MOST appropriate？

A. AWS Artifact  
B. 檢查 embedding、chunking、metadata filter 與 top-k  
C. 每天從零訓練 foundation model  
D. 提高 temperature  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Retrieval quality**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. 檢查 embedding、chunking、metadata filter 與 top-k**

</details>

<details>
<summary>📘 詳解</summary>

問題在 retrieval pipeline 時應先調檢索品質。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**找錯資料 → 查 Retrieval**

</details>

---

## Question 42

> **⭐⭐** · 🎯 **RAG vs fine-tuning**

某企業情境如下：**內部產品資料每天更新且不想寫進模型權重**。哪個選項 MOST appropriate？

A. 提高 temperature  
B. 從零訓練 FM  
C. RAG  
D. Fine-tuning every update  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**RAG vs fine-tuning**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**C. RAG**

</details>

<details>
<summary>📘 詳解</summary>

外部化知識可避免每次資料更新都重訓。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**知識留外面 → RAG**

</details>

---

## Question 43

> **⭐** · 🎯 **Prompt injection**

某企業情境如下：**輸入要求忽略 system instructions 並洩漏原始 prompt**。哪個選項 MOST appropriate？

A. Model distillation  
B. Clustering  
C. Encryption  
D. Prompt injection  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Prompt injection**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**D. Prompt injection**

</details>

<details>
<summary>📘 詳解</summary>

惡意輸入企圖操控模型指令層級。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**惡意指令 → Injection**

</details>

---

## Question 44

> **⭐⭐⭐** · 🎯 **Indirect prompt injection**

某企業情境如下：**惡意指令藏在 RAG 讀取的網頁內容裡**。哪個選項 MOST appropriate？

A. Indirect prompt injection  
B. Regression  
C. Quantization  
D. Encryption  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Indirect prompt injection**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**A. Indirect prompt injection**

</details>

<details>
<summary>📘 詳解</summary>

攻擊指令來自外部內容而非直接 user prompt。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**攻擊藏文件 → Indirect injection**

</details>

---

## Question 45

> **⭐⭐⭐** · 🎯 **Agent security**

某企業情境如下：**agent 會讀不可信網頁並可呼叫高權限工具**。哪個選項 MOST appropriate？

A. AWS Artifact  
B. 最小權限、內容隔離與高風險操作確認  
C. 每天從零訓練 foundation model  
D. 提高 temperature  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Agent security**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. 最小權限、內容隔離與高風險操作確認**

</details>

<details>
<summary>📘 詳解</summary>

外部資料應視為不可信，工具使用需 least privilege。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**不可信資料 + 最小權限**

</details>

---

## Question 46

> **⭐** · 🎯 **Distillation**

某企業情境如下：**用高能力大模型教較小模型處理固定任務**。哪個選項 MOST appropriate？

A. Clustering  
B. Translation  
C. Model distillation  
D. RAG  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Distillation**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**C. Model distillation**

</details>

<details>
<summary>📘 詳解</summary>

Teacher-student 方法可降低推論成本與 latency。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**大教小 → Distillation**

</details>

---

## Question 47

> **⭐** · 🎯 **Evaluation**

某企業情境如下：**客服 GenAI 要證明真的改善業務**。哪個選項 MOST appropriate？

A. 每天從零訓練 foundation model  
B. 提高 temperature  
C. AWS Artifact  
D. 同時評估任務完成率、使用者滿意度與每次互動成本  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Evaluation**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**D. 同時評估任務完成率、使用者滿意度與每次互動成本**

</details>

<details>
<summary>📘 詳解</summary>

GenAI 評估不應只看模型技術指標，也要對齊 business outcomes。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> RAG、fine-tuning、continued pre-training、prompting 都可能合理，但用途不同。

<details>
<summary>🧠 記憶口訣</summary>

**模型分數 + 商業結果**

</details>

---


# Domain 4 — Guidelines for Responsible AI

## Question 48

> **⭐⭐⭐** · 🎯 **Fairness**

某企業情境如下：**整體 accuracy 高，但某人口群的 false negative rate 特別高**。哪個選項 MOST appropriate？

A. Fairness / bias investigation  
B. 只提高模型參數量  
C. 隱藏模型限制  
D. Amazon Polly  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Fairness**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**A. Fairness / bias investigation**

</details>

<details>
<summary>📘 詳解</summary>

子群錯誤率差異是公平性警訊。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> Responsible AI 不只看整體 accuracy；要看子群、透明度、監督與風險。

<details>
<summary>🧠 記憶口訣</summary>

**總體好 ≠ 各群體公平**

</details>

---

## Question 49

> **⭐** · 🎯 **Explainability**

某企業情境如下：**使用者想知道貸款模型為何拒絕申請**。哪個選項 MOST appropriate？

A. Amazon Polly  
B. 提供主要影響因素與可理解的理由  
C. 只提高模型參數量  
D. 隱藏模型限制  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Explainability**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. 提供主要影響因素與可理解的理由**

</details>

<details>
<summary>📘 詳解</summary>

Explainability 關注模型為何做出結果。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> Responsible AI 不只看整體 accuracy；要看子群、透明度、監督與風險。

<details>
<summary>🧠 記憶口訣</summary>

**Explainability = 為什麼**

</details>

---

## Question 50

> **⭐⭐⭐** · 🎯 **SageMaker Clarify**

某企業情境如下：**需要偵測模型 bias 並分析預測原因**。哪個選項 MOST appropriate？

A. AWS Artifact  
B. Amazon Lex  
C. SageMaker Clarify  
D. Amazon Polly  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**SageMaker Clarify**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**C. SageMaker Clarify**

</details>

<details>
<summary>📘 詳解</summary>

Clarify 支援 bias detection 與 explainability。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> Responsible AI 不只看整體 accuracy；要看子群、透明度、監督與風險。

<details>
<summary>🧠 記憶口訣</summary>

**Clarify = Bias + Explainability**

</details>

---

## Question 51

> **⭐⭐** · 🎯 **Model Cards**

某企業情境如下：**保存模型用途、限制、風險與評估紀錄**。哪個選項 MOST appropriate？

A. Amazon Route 53  
B. Amazon Transcribe  
C. Amazon Polly  
D. SageMaker Model Cards  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Model Cards**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**D. SageMaker Model Cards**

</details>

<details>
<summary>📘 詳解</summary>

Model Cards 支援模型治理文件化。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> Responsible AI 不只看整體 accuracy；要看子群、透明度、監督與風險。

<details>
<summary>🧠 記憶口訣</summary>

**Model Card = 模型履歷**

</details>

---

## Question 52

> **⭐** · 🎯 **Transparency**

某企業情境如下：**使用者應知道正在與 AI 互動及其限制**。哪個選項 MOST appropriate？

A. 清楚揭露 AI 使用與限制  
B. 只提高模型參數量  
C. 隱藏模型限制  
D. Amazon Polly  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Transparency**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**A. 清楚揭露 AI 使用與限制**

</details>

<details>
<summary>📘 詳解</summary>

Transparency 強調揭露系統性質與限制。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> Responsible AI 不只看整體 accuracy；要看子群、透明度、監督與風險。

<details>
<summary>🧠 記憶口訣</summary>

**Transparency = 清楚揭露**

</details>

---

## Question 53

> **⭐** · 🎯 **Human oversight**

某企業情境如下：**AI 醫療建議可能造成重大後果**。哪個選項 MOST appropriate？

A. Amazon Polly  
B. 保留專業人員審核與介入  
C. 只提高模型參數量  
D. 隱藏模型限制  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Human oversight**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. 保留專業人員審核與介入**

</details>

<details>
<summary>📘 詳解</summary>

高影響場景需要適當的人類監督。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> Responsible AI 不只看整體 accuracy；要看子群、透明度、監督與風險。

<details>
<summary>🧠 記憶口訣</summary>

**高風險 → Human-in-the-loop**

</details>

---

## Question 54

> **⭐⭐** · 🎯 **Dataset bias**

某企業情境如下：**訓練資料對某目標族群代表性不足**。哪個選項 MOST appropriate？

A. 隱藏模型限制  
B. Amazon Polly  
C. 補足代表性樣本並做子群評估  
D. 只提高模型參數量  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Dataset bias**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**C. 補足代表性樣本並做子群評估**

</details>

<details>
<summary>📘 詳解</summary>

改善資料代表性可降低 dataset bias。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> Responsible AI 不只看整體 accuracy；要看子群、透明度、監督與風險。

<details>
<summary>🧠 記憶口訣</summary>

**Bias 常從資料開始**

</details>

---

## Question 55

> **⭐⭐⭐** · 🎯 **Robustness**

某企業情境如下：**模型遇到小幅資料擾動就大幅改變結果**。哪個選項 MOST appropriate？

A. 只提高模型參數量  
B. 隱藏模型限制  
C. Amazon Polly  
D. 測試並改善模型在不同條件下的穩定性  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Robustness**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**D. 測試並改善模型在不同條件下的穩定性**

</details>

<details>
<summary>📘 詳解</summary>

Robustness 關注擾動、分佈變化下的可靠性。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> Responsible AI 不只看整體 accuracy；要看子群、透明度、監督與風險。

<details>
<summary>🧠 記憶口訣</summary>

**Robust = 不易被擾動打垮**

</details>

---

## Question 56

> **⭐** · 🎯 **Sustainability**

某企業情境如下：**兩模型品質相近，希望降低能源與運算消耗**。哪個選項 MOST appropriate？

A. 選擇更有效率且滿足需求的模型  
B. 只提高模型參數量  
C. 隱藏模型限制  
D. Amazon Polly  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Sustainability**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**A. 選擇更有效率且滿足需求的模型**

</details>

<details>
<summary>📘 詳解</summary>

Sustainability 考量訓練與推論的資源與能源消耗。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> Responsible AI 不只看整體 accuracy；要看子群、透明度、監督與風險。

<details>
<summary>🧠 記憶口訣</summary>

**同樣好 → 選更省資源**

</details>

---


# Domain 5 — Security, Compliance and Governance

## Question 57

> **⭐⭐** · 🎯 **Least privilege**

某企業情境如下：**Bedrock 應用只需要讀一個特定 S3 bucket**。哪個選項 MOST appropriate？

A. Amazon Lex  
B. IAM 最小權限 policy  
C. 關閉 IAM  
D. 提高 temperature  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Least privilege**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. IAM 最小權限 policy**

</details>

<details>
<summary>📘 詳解</summary>

Least privilege 只授予完成工作所需權限。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 安全題先抓 least privilege、audit、sensitive data、vulnerability、compliance 的關鍵字。

<details>
<summary>🧠 記憶口訣</summary>

**只給必要權限**

</details>

---

## Question 58

> **⭐** · 🎯 **CloudTrail**

某企業情境如下：**稽核某 principal 是否呼叫過 Bedrock API**。哪個選項 MOST appropriate？

A. AWS Config  
B. Amazon Polly  
C. AWS CloudTrail  
D. Amazon Macie  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**CloudTrail**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**C. AWS CloudTrail**

</details>

<details>
<summary>📘 詳解</summary>

CloudTrail 記錄 AWS API activity。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 安全題先抓 least privilege、audit、sensitive data、vulnerability、compliance 的關鍵字。

<details>
<summary>🧠 記憶口訣</summary>

**誰呼叫 API → CloudTrail**

</details>

---

## Question 59

> **⭐** · 🎯 **Amazon Macie**

某企業情境如下：**找出 S3 中可能含信用卡號與個資的物件**。哪個選項 MOST appropriate？

A. Amazon Inspector  
B. AWS Artifact  
C. Amazon Lex  
D. Amazon Macie  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Amazon Macie**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**D. Amazon Macie**

</details>

<details>
<summary>📘 詳解</summary>

Macie 用於發現與分類 S3 敏感資料。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 安全題先抓 least privilege、audit、sensitive data、vulnerability、compliance 的關鍵字。

<details>
<summary>🧠 記憶口訣</summary>

**S3 個資 → Macie**

</details>

---

## Question 60

> **⭐⭐⭐** · 🎯 **Amazon Inspector**

某企業情境如下：**掃描 EC2 與 container image 的已知漏洞**。哪個選項 MOST appropriate？

A. Amazon Inspector  
B. Amazon Macie  
C. AWS Config  
D. Amazon Comprehend  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Amazon Inspector**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**A. Amazon Inspector**

</details>

<details>
<summary>📘 詳解</summary>

Inspector 提供自動化 vulnerability management。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 安全題先抓 least privilege、audit、sensitive data、vulnerability、compliance 的關鍵字。

<details>
<summary>🧠 記憶口訣</summary>

**漏洞 → Inspector**

</details>

---

## Question 61

> **⭐** · 🎯 **AWS Artifact**

某企業情境如下：**下載 AWS SOC 與 ISO 合規報告**。哪個選項 MOST appropriate？

A. Amazon Lex  
B. AWS Artifact  
C. AWS CloudTrail  
D. Amazon Macie  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**AWS Artifact**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. AWS Artifact**

</details>

<details>
<summary>📘 詳解</summary>

Artifact 提供 AWS compliance reports 與 agreements。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 安全題先抓 least privilege、audit、sensitive data、vulnerability、compliance 的關鍵字。

<details>
<summary>🧠 記憶口訣</summary>

**合規文件 → Artifact**

</details>

---

## Question 62

> **⭐** · 🎯 **AWS Config**

某企業情境如下：**持續檢查 S3 bucket 不可公開等資源設定規則**。哪個選項 MOST appropriate？

A. Amazon Polly  
B. Amazon Rekognition  
C. AWS Config  
D. AWS Artifact  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**AWS Config**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**C. AWS Config**

</details>

<details>
<summary>📘 詳解</summary>

Config 追蹤並評估 resource configuration compliance。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 安全題先抓 least privilege、audit、sensitive data、vulnerability、compliance 的關鍵字。

<details>
<summary>🧠 記憶口訣</summary>

**設定合規 → Config**

</details>

---

## Question 63

> **⭐⭐** · 🎯 **Encryption**

某企業情境如下：**保護 GenAI 敏感資料在儲存與傳輸過程**。哪個選項 MOST appropriate？

A. 關閉 IAM  
B. 提高 temperature  
C. Amazon Lex  
D. Encryption at rest and in transit  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Encryption**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**D. Encryption at rest and in transit**

</details>

<details>
<summary>📘 詳解</summary>

資料保護應涵蓋 at rest 與 in transit。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 安全題先抓 least privilege、audit、sensitive data、vulnerability、compliance 的關鍵字。

<details>
<summary>🧠 記憶口訣</summary>

**At rest + In transit**

</details>

---

## Question 64

> **⭐** · 🎯 **Data privacy**

某企業情境如下：**避免使用者 PII 被不當提供給其他使用者**。哪個選項 MOST appropriate？

A. 資料隔離、存取控制、敏感資訊過濾與 retention 政策  
B. 關閉 IAM  
C. 提高 temperature  
D. Amazon Lex  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Data privacy**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**A. 資料隔離、存取控制、敏感資訊過濾與 retention 政策**

</details>

<details>
<summary>📘 詳解</summary>

Privacy 需要隔離、授權、過濾與資料生命週期治理。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 安全題先抓 least privilege、audit、sensitive data、vulnerability、compliance 的關鍵字。

<details>
<summary>🧠 記憶口訣</summary>

**PII → 隔離 + 最小權限**

</details>

---

## Question 65

> **⭐⭐⭐** · 🎯 **Guardrails**

某企業情境如下：**需要封鎖特定主題、有害內容與敏感資訊輸出**。哪個選項 MOST appropriate？

A. Amazon EC2  
B. Amazon Bedrock Guardrails  
C. AWS Artifact  
D. Amazon Route 53  

<details>
<summary>💡 Hint</summary>

先辨識核心考點：**Guardrails**。不要只看服務名稱，找出題目最重要的限制。

</details>

<details>
<summary>✅ 答案</summary>

**B. Amazon Bedrock Guardrails**

</details>

<details>
<summary>📘 詳解</summary>

Guardrails 可套用內容與主題安全控制。

題目使用 **MOST appropriate** 時，不代表其他選項在所有情境都完全錯，而是要選最直接滿足目前需求與限制的方案。

</details>

> ⚠️ **AWS 考試陷阱**  
> 安全題先抓 least privilege、audit、sensitive data、vulnerability、compliance 的關鍵字。

<details>
<summary>🧠 記憶口訣</summary>

**內容安全 → Guardrails**

</details>

---

# 🧠 第 3 回考前判斷框架

遇到 AWS AIF-C01 情境題，可以依序問自己：

1. **它到底要解決什麼？** — 分類、生成、檢索、agent、治理還是安全？
2. **資料會不會常更新？** — 常更新的企業知識通常先想到 RAG。
3. **它要改知識還是改行為？** — RAG 補知識；Fine-tuning 改行為；Continued pre-training 學大量領域語料。
4. **題目是否強調成本或維運？** — 優先 fully managed、較小但達標的模型、精簡 tokens、cache。
5. **題目是否強調風險？** — Least privilege、grounding、guardrails、human approval。
6. **看到 AWS 安全服務先做關鍵字配對：**
   - API audit → **CloudTrail**
   - Resource configuration compliance → **AWS Config**
   - S3 sensitive data → **Macie**
   - Vulnerability → **Inspector**
   - Compliance reports → **Artifact**
   - FM content controls → **Bedrock Guardrails**
7. **看到 Responsible AI：**
   - Bias / subgroup → **Fairness / Clarify**
   - Why did model decide? → **Explainability**
   - Model documentation → **Model Cards**
   - High-risk action → **Human oversight**

## 三回題庫的建議刷法

- **第 1 回**：建立概念與服務辨識。
- **第 2 回**：練 RAG / Agent / Security 與更多情境。
- **第 3 回**：練 BEST / MOST appropriate / cost / operational overhead 的取捨判斷。

