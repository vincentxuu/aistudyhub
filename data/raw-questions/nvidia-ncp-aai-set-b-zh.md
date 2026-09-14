---
exam: NCP-AAI
lang: zh-TW
---

## Q1
Type: single
Difficulty: 2
Tags: agent-architecture, supervisor-pattern
Concepts: supervisor-agent
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

在多 agent 系統中，監督 agent 接收使用者請求、將子任務委派給專門的工作 agent，並綜合它們的輸出。與點對點 agent 拓撲相比，這種架構的關鍵風險是什麼？

A. 工作 agent 無法存取外部工具
B. 監督者成為所有 agent 間通訊的單一故障點和瓶頸
C. 工作 agent 必須共用相同的 LLM 骨幹
D. 系統無法擴展超過三個工作 agent

Answer: B

Hint: 想想當中央協調者當機或過載時會發生什麼。

Explanation: 監督者（輻射式）模式將所有通訊路由通過一個 agent，使其成為單一故障點和潛在的吞吐量瓶頸。點對點拓撲分散通訊但更難協調。

Why others wrong: 工作者可以獨立呼叫工具（A）；工作者可以使用不同模型（C）；工作者數量沒有固有限制（D）。

Trap: 假設監督者模式總是更優因為更容易理解——它們以彈性換取簡潔。

Mnemonic: 監督者 = 單一中樞 = 單一故障點

## Q2
Type: single
Difficulty: 3
Tags: agent-architecture, graph-topology
Concepts: agent-graph-design
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

一家企業部署了客服系統，其中接案 agent 將查詢路由到四個領域專門 agent 之一（帳務、技術、出貨、退貨）。每個領域 agent 可以升級到人工審查 agent。人工審查 agent 可以將案件重新分配回任何領域 agent。哪種圖形拓撲最能描述這個系統？

A. 具有固定循序階段的線性管線
B. 無環的有向無環圖（DAG）
C. 具有條件路由和回饋迴圈的有向環形圖
D. 每個 agent 都與其他所有 agent 通訊的全連接網狀

Answer: C

Hint: 查詢是否可以重新訪問已經通過的節點？

Explanation: 人工審查 agent 可以將案件重新分配回領域 agent，在執行圖中建立環路。接案 agent 提供條件路由。這個組合使其成為有向環形圖，而非 DAG 或管線。

Why others wrong: 管線沒有分支（A）；DAG 禁止環路但重新分配建立了一個（B）；全連接網狀意味著所有對所有的通訊，這裡並非如此（D）。

Trap: 因為主要流程看起來是線性的就稱之為 DAG——從人工審查回到領域 agent 的重新分配路徑建立了環路。

Mnemonic: 重新分配 = 回饋迴圈 = 環形圖

## Q3
Type: single
Difficulty: 2
Tags: agent-architecture, event-driven
Concepts: event-driven-agents
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

當 agent 必須對外部觸發（webhooks、資料庫變更、感測器資料）做出反應而非被使用者查詢呼叫時，哪種架構模式最適合？

A. 帶輪詢間隔的循序管線
B. 帶訊息佇列和發布-訂閱訊息的事件驅動架構
C. 帶長輪詢的同步請求-回應
D. 帶排程 cron 工作的批次處理

Answer: B

Hint: 想想哪種模式自然處理非同步、不可預測的觸發。

Explanation: 帶發布/訂閱訊息的事件驅動架構將生產者與消費者解耦，允許 agent 在事件到達時做出反應，無需輪詢或阻塞。這是反應式 agent 系統的標準模式。

Why others wrong: 輪詢浪費資源並引入延遲（A）；長輪詢阻塞執行緒（C）；批次處理對即時觸發引入不可接受的延遲（D）。

Trap: 因為輪詢更簡單就選擇它——它無法擴展以處理高頻事件且浪費計算資源。

Mnemonic: 外部觸發 = 事件 = 事件驅動 + 發布/訂閱

## Q4
Type: single
Difficulty: 3
Tags: agent-architecture, capability-boundaries
Concepts: agent-decomposition
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

將複雜工作流程分解為多個 agent 時，決定 agent 邊界的首要原則是什麼？

A. 每個 agent 應對應一個 LLM API 呼叫
B. 每個 agent 應封裝一個具有清晰輸入/輸出契約的連貫能力領域，最小化跨 agent 依賴
C. Agent 應根據程式語言邊界來劃分
D. 每個 agent 應處理恰好一個使用者意圖

Answer: B

Hint: 想想軟體工程原則如高內聚和低耦合如何應用於 agent 設計。

Explanation: Agent 邊界應遵循高內聚和低耦合原則。每個 agent 封裝一個具有明確介面的專業領域，使系統模組化、可測試且可維護。按 API 呼叫或語言劃分是任意的。

Why others wrong: 每個 API 呼叫一個 agent 太細粒度（A）；語言邊界與 agent 設計無關（C）；每個意圖一個 agent 忽略共享能力並造成冗餘（D）。

Trap: 過度細粒度地劃分 agent，造成過多的 agent 間通訊開銷。

Mnemonic: Agent 邊界 = 能力邊界，高內聚 + 低耦合

## Q5
Type: single
Difficulty: 1
Tags: agent-architecture, agentic-vs-workflow
Concepts: agent-workflow-distinction
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

什麼區分 agentic AI 系統與固定工作流程自動化？

A. Agentic 系統總是比固定工作流程更快
B. Agentic 系統可以根據中間結果動態決定呼叫哪些工具及其順序，而固定工作流程遵循預定步驟
C. 固定工作流程不能使用 API
D. Agentic 系統不需要 LLM

Answer: B

Hint: 想想誰決定下一步——系統還是預定義的腳本。

Explanation: Agentic 系統的定義特徵是自主決策：agent 觀察中間結果並動態選擇下一個行動。固定工作流程無論中間輸出如何都執行靜態序列。

Why others wrong: 由於推理開銷，Agentic 系統通常有更高的延遲（A）；固定工作流程常用 API（C）；agentic 系統通常需要 LLM 進行推理（D）。

Trap: 以為任何使用 LLM 的系統就自動是「agentic」——使用 LLM 的固定 prompt-response 管線仍是工作流程而非 agent。

Mnemonic: Agent = 自主決策；工作流程 = 預定步驟

## Q6
Type: single
Difficulty: 2
Tags: agent-architecture, hierarchical-agents
Concepts: hierarchical-multi-agent
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

在具有三個層級（協調者 → 團隊領導 → 工作者）的階層式多 agent 系統中，錯誤傳播應如何設計？

A. 所有錯誤應直接冒泡到協調者進行集中處理
B. 每個層級應先在其範圍內處理錯誤，僅將無法解決的故障連同已嘗試內容的上下文升級到父層級
C. 錯誤應被靜默記錄並跳過失敗的子任務
D. 工作者在任何錯誤時應從頭重新開始而不通知父 agent

Answer: B

Hint: 想想軟體例外處理如何在分層架構中運作。

Explanation: 階層式錯誤處理遵循輔助性原則——在最低能力層級處理，僅在必要時帶上下文升級。這防止協調者被淹沒並保持錯誤解決靠近發生的地方。

Why others wrong: 將所有事冒泡到頂層造成瓶頸並丟失本地上下文（A）；靜默記錄掩蓋故障（C）；盲目重啟浪費資源且可能無限迴圈（D）。

Trap: 在頂層集中所有錯誤處理——看起來更乾淨但會淹沒協調者並丟失診斷上下文。

Mnemonic: 本地處理，帶上下文升級——輔助性原則

## Q7
Type: multi
Difficulty: 3
Tags: agent-architecture, scalability-patterns
Concepts: scaling-multi-agent
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

一個多 agent 系統必須在高峰時段處理 10 倍的流量激增。哪兩種設計模式最有效？（選兩個）

A. 基於佇列深度自動擴展的動態 agent 池，當需求超過容量時產生額外的工作 agent 實例
B. 在部署時硬編碼最大 agent 數量
C. 帶優先級排程的非同步任務佇列，在激增期間緩衝和排序工作
D. 帶更長超時值的同步處理

Answer: A, C

Hint: 想想彈性和緩衝——處理可變負載的兩個互補策略。

Explanation: 自動擴展 agent 池提供彈性容量，而非同步任務佇列在激增期間緩衝需求並優先處理關鍵工作。兩者共同處理流量激增的計算和排程挑戰。

Why others wrong: 硬編碼限制無法適應激增（B）；更長的超時只是延遲失敗而不增加容量（D）。

Trap: 只選擇自動擴展而忘記佇列——沒有緩衝的話，在擴展延遲期間請求會被丟棄。

Mnemonic: 激增需要兩件事：彈性計算（自動擴展）+ 緩衝（佇列）

## Q8
Type: single
Difficulty: 2
Tags: agent-architecture, agent-interface-contract
Concepts: interface-design
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

在多 agent 系統中定義 agent 間的介面契約時，哪個元素最不重要需要指定？

A. 帶資料類型和必填欄位的輸入和輸出 schema
B. 錯誤回應格式和重試語意
C. 接收 agent 使用的內部 prompt 範本
D. 超時和回應時間的 SLA 期望

Answer: C

Hint: 想想封裝——什麼應該隱藏 vs. 暴露。

Explanation: 內部 prompt 範本是應封裝在 agent 內部的實作細節。介面契約應指定外部行為（I/O schema、錯誤處理、SLA）而不暴露內部實作，遵循資訊隱藏原則。

Why others wrong: I/O schema 定義資料契約（A）；錯誤格式啟用適當的處理（B）；SLA 設定效能期望（D）——都是基本的契約元素。

Trap: 以為其他 agent 需要知道你的 prompt 才能正確互動——這破壞封裝並建立緊密耦合。

Mnemonic: 介面 = 什麼，而非如何。Prompt 是「如何」——保持內部。

## Q9
Type: single
Difficulty: 1
Tags: agent-architecture, idempotency
Concepts: idempotent-operations
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

在具有自動重試的系統中設計 agent 工具呼叫時，為什麼冪等性很重要？

A. 它確保 LLM 每次產生相同的文字
B. 它防止在超時或暫時性故障後重試相同的工具呼叫時產生重複的副作用
C. 它使 agent 回應更快
D. 它消除錯誤處理的需要

Answer: B

Hint: 如果因網路超時重試付款 API 呼叫——但第一次呼叫其實已成功會怎樣？

Explanation: 冪等操作無論執行多少次都產生相同結果。沒有冪等性，重試的工具呼叫（例如信用卡扣款）可能導致重複副作用，造成資料損壞或財務錯誤。

Why others wrong: LLM 文字生成本質上是非確定性的（A）；冪等性不影響速度（C）；對非暫時性錯誤仍需要錯誤處理（D）。

Trap: 以為重試預設是安全的——沒有冪等性，重試可能雙重扣款、雙重建立或雙重發送。

Mnemonic: 冪等 = 安全重試。f(f(x)) = f(x)

## Q10
Type: single
Difficulty: 2
Tags: agent-architecture, guardrail-placement
Concepts: guardrail-architecture
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

在多 agent 管線中，輸入/輸出護欄應該放在哪裡以獲得最大安全性和最小延遲開銷？

A. 僅在初始使用者輸入入口點
B. 在系統邊界（使用者輸入和最終輸出）加上信任邊界改變的每個 agent 到 agent 交接處
C. 在每個 LLM 推論呼叫之後，不論上下文
D. 僅在回傳給使用者前的最終輸出

Answer: B

Hint: 想想信任層級在哪裡改變——不是每個內部邊界都同樣有風險。

Explanation: 護欄應放在信任邊界：外部使用者介面和安全上下文改變的任何內部交接處（例如工具呼叫 agent 傳遞給資料存取 agent）。到處放增加不必要的延遲；只在邊緣放遺漏內部升級風險。

Why others wrong: 僅輸入遺漏輸出注入風險（A）；每次呼叫在相同信任層級邊界增加不必要的開銷（C）；僅輸出遺漏輸入端的 prompt injection（D）。

Trap: 過度防護（每次呼叫）或防護不足（僅邊緣）——最佳策略針對信任邊界轉換。

Mnemonic: 守住門而非走廊——門 = 信任邊界

## Q11
Type: single
Difficulty: 3
Tags: agent-architecture, consensus-mechanisms
Concepts: multi-agent-consensus
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

三個專家 agent 分析一張醫療影像並產出不同的診斷。系統必須輸出單一建議。哪種共識機制在可靠性和可解釋性之間提供最佳平衡？

A. 總是採用第一個 agent 的答案因為它最先處理影像
B. 基於每個 agent 對特定影像類型的歷史準確率進行加權投票，並展示每個 agent 的投票和信心度
C. 在三個中隨機選擇以確保公平
D. 串接所有三個診斷並將它們都呈現為同等有效

Answer: B

Hint: 同時考慮決策品質和臨床醫師是否能理解為什麼做出這個決定。

Explanation: 加權投票納入每個 agent 的過往記錄，產出比簡單多數投票更可靠的共識。展示個別投票及信心分數提供醫療場景中人類監督所需的可解釋性。

Why others wrong: 先回應的是任意的（A）；隨機選擇忽略品質訊號（C）；呈現所有三個而不綜合無法幫助臨床醫師做決定（D）。

Trap: 使用簡單多數投票——它將所有 agent 視為同等可靠，浪費了歷史效能資料的資訊。

Mnemonic: 醫療共識 = 加權投票 + 可解釋性軌跡

## Q12
Type: single
Difficulty: 2
Tags: agent-architecture, agent-lifecycle
Concepts: agent-state-lifecycle
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

在長期運行的多 agent 系統中，哪個 agent 生命週期狀態轉換需要明確的資源清理以防止記憶體洩漏？

A. 閒置 → 活躍（收到新任務時）
B. 活躍 → 等待（被外部 API 呼叫阻塞時）
C. 活躍 → 終止（agent 的任務完成或失敗時）
D. 閒置 → 閒置（沒有任務可用時）

Answer: C

Hint: 哪個轉換意味著 agent 不會再被使用？

Explanation: 當 agent 轉換到終止狀態時，它持有的所有資源（記憶體緩衝、開啟的連線、快取的嵌入、對話歷史）必須被明確釋放。在長期運行的系統中未清理終止的 agent 會導致逐漸的記憶體和連線耗盡。

Why others wrong: 閒置→活躍是取得資源，不需清理（A）；活躍→等待仍持有資源以便恢復（B）；閒置→閒置是空操作（D）。

Trap: 假設垃圾回收處理 agent 清理——在具有原生資源（GPU 記憶體、檔案控制代碼、DB 連線）的系統中，需要明確清理。

Mnemonic: 終止 = 該清理了。不要留下佔用資源的殭屍 agent。

## Q13
Type: single
Difficulty: 3
Tags: agent-architecture, backpressure
Concepts: backpressure-design
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

一個多 agent 管線處理文件：Agent A 擷取文字，Agent B 分類，Agent C 摘要。Agent B 比 A 和 C 慢 5 倍。沒有任何流量控制，系統會展現什麼故障模式？

A. Agent C 會產出空的摘要
B. Agent A 的輸出佇列會無限增長，最終導致記憶體不足錯誤，同時 Agent C 因缺少輸入而閒置
C. 所有三個 agent 會同等地變慢
D. Agent B 會自動加速以匹配 Agent A 的吞吐量

Answer: B

Hint: 當生產者比消費者快且它們之間有無限緩衝時會發生什麼？

Explanation: 沒有背壓機制，Agent A 會淹沒 Agent B 的輸入佇列因為 A 快 5 倍。無限佇列增長直到記憶體耗盡。同時，Agent C 閒置等待 Agent B 的緩慢輸出。這是經典的生產者-消費者不平衡問題。

Why others wrong: Agent C 什麼都不產出（不是空的）因為沒有輸入（A）；沒有明確機制 agent 不會自動平衡（C、D）。

Trap: 假設無限佇列沒問題因為「記憶體很便宜」——在生產環境中，無限增長總是會達到限制。

Mnemonic: 快生產者 + 慢消費者 + 無背壓 = 佇列爆炸

## Q14
Type: single
Difficulty: 1
Tags: agent-architecture, tool-registry
Concepts: dynamic-tool-registry
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

在 agentic 系統中，動態工具註冊表相比靜態工具清單的主要優勢是什麼？

A. 它減少 LLM 的 context window 大小
B. 它允許在執行時新增、移除或更新工具，無需重新部署 agent
C. 它保證更快的工具執行
D. 它消除工具描述的需要

Answer: B

Hint: 想想當你需要為正在運行的 agent 新增一個新的 API 整合時會發生什麼。

Explanation: 動態工具註冊表將工具可用性與 agent 部署解耦。新工具可以被註冊、已棄用的工具可被移除、工具 schema 可被更新而無需停止或重新部署 agent——這對不斷演進的企業系統至關重要。

Why others wrong: 註冊表本身不會減少上下文（A）；執行速度取決於工具而非註冊表（C）；LLM 仍需要描述來選擇工具（D）。

Trap: 以為靜態工具清單沒問題因為「我們不常新增工具」——在生產環境中，工具演進是持續的。

Mnemonic: 動態註冊表 = 不重啟就能熱插拔工具

## Q15
Type: single
Difficulty: 2
Tags: agent-architecture, observability-design
Concepts: distributed-tracing-agents
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

設計多 agent 系統的可觀測性時，哪個識別碼對於追蹤單一使用者請求跨越所有它觸及的 agent 是必要的？

A. Agent 的程序 ID
B. 透過同一請求的所有 agent 到 agent 訊息傳播的關聯 ID（追蹤 ID）
C. 使用者的 IP 位址
D. 每個 agent 新增的時間戳記

Answer: B

Hint: 想想微服務中的分散式追蹤——什麼將相關呼叫連結在一起？

Explanation: 關聯/追蹤 ID 唯一標識一個請求並透過每個 agent 互動傳遞，啟用端到端追蹤。這是微服務中分散式追蹤（例如 OpenTelemetry 追蹤 ID）的相同原則應用於多 agent 系統。

Why others wrong: 程序 ID 跨 agent 會改變（A）；IP 位址不識別特定請求（C）；時間戳記可能碰撞且不連結相關呼叫（D）。

Trap: 使用時間戳記來關聯——在分散式系統中，時鐘偏移使時間戳記作為關聯識別碼不可靠。

Mnemonic: 一個請求，一個追蹤 ID——到處傳播它

## Q16
Type: single
Difficulty: 1
Tags: agent-architecture, stateless-design
Concepts: stateless-agent-benefits
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

將 agent 設計為無狀態服務（每次呼叫從外部儲存載入上下文）的主要好處是什麼？

A. 它降低 agent 回應的品質
B. 任何實例都可以處理任何請求，實現水平擴展和容錯，因為沒有實例持有不可替代的狀態
C. 它消除資料庫的需要
D. 它使 agent 更快因為沒有狀態要管理

Answer: B

Hint: 如果一個 agent 實例當機，另一個實例能接手工作嗎？

Explanation: 無狀態 agent 可以自由擴展、負載平衡和替換，因為沒有單一實例持有關鍵狀態。狀態存在於所有實例可存取的外部儲存（資料庫、快取）中。這是彈性分散式系統的基礎模式。

Why others wrong: 如果上下文正確載入，無狀態不影響回應品質（A）；外部狀態仍需要儲存（C）；每次呼叫載入狀態增加延遲而非移除（D）。

Trap: 以為無狀態意味著「沒有狀態」——它意味著狀態被外部化而非消除。

Mnemonic: 無狀態 agent = 牲畜而非寵物。任何實例都能服務任何請求。

## Q17
Type: multi
Difficulty: 3
Tags: agent-architecture, failure-modes
Concepts: multi-agent-failure-analysis
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

一個多 agent 程式碼審查系統有分析 agent、安全掃描 agent 和風格檢查 agent 平行執行。應該實作哪兩種故障處理策略？（選兩個）

A. 斷路器模式——如果一個 agent 反覆失敗，暫時停止向其發送請求並使用降級模式
B. 忽略所有故障並回傳任何可用的結果
C. 帶後備的超時——如果 agent 在 SLA 內沒有回應，使用快取結果或簡化的備用分析
D. 在任何單一 agent 故障時從頭重啟整個管線

Answer: A, C

Hint: 想想優雅降級——系統即使部分失敗也應該有用。

Explanation: 斷路器透過隔離故障 agent 防止連鎖故障。帶後備的超時確保系統回傳有用的（雖然降級的）結果而非無限期掛起。兩者共同提供彈性而非全有或全無的行為。

Why others wrong: 靜默忽略故障掩蓋嚴重問題（B）；當只有一個平行分支失敗時重啟所有東西是浪費的（D）。

Trap: 將平行 agent 故障視為全有或全無——系統應優雅降級，回傳可用結果同時標示哪些分析遺失。

Mnemonic: 平行 agent：斷路器 + 超時/後備 = 優雅降級

## Q18
Type: single
Difficulty: 2
Tags: agent-architecture, agent-memory-architecture
Concepts: shared-vs-private-memory
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

在多 agent 系統中，agent 何時應使用共享記憶體 vs 私有記憶體？

A. 總是使用共享記憶體讓所有 agent 擁有相同資訊
B. 共享記憶體用於公共上下文（使用者檔案、對話歷史），私有記憶體用於 agent 特定的工作狀態（中間推理、草稿輸出）
C. 總是使用私有記憶體以防止 agent 互相干擾
D. 只要 LLM 夠大，記憶體架構不重要

Answer: B

Hint: 想想哪些資訊需要協調 vs 哪些是內部工作狀態。

Explanation: 共享記憶體提供公共上下文（使用者資料、對話狀態）的一致視圖，而私有記憶體隔離每個 agent 的工作狀態以防止干擾。這鏡像了並行程式設計中的共享/私有記憶體模型。

Why others wrong: 全共享造成競爭並洩漏內部推理（A）；全私有失去共享上下文並造成不一致（C）；記憶體架構無論模型大小都顯著影響行為（D）。

Trap: 為了「透明度」將所有東西放入共享記憶體——它暴露可能混淆其他 agent 的中間推理。

Mnemonic: 共享 = 共同基礎；私有 = 草稿紙

## Q19
Type: single
Difficulty: 2
Tags: agent-development, structured-output
Concepts: structured-output-parsing
Domain: Domain 2 — Agent Development
DomainNumber: 2

一個 agent 必須以嚴格的 JSON schema 回傳結果以供下游處理。確保 LLM 產出有效結構化輸出最可靠的方法是什麼？

A. 在 system prompt 中加入「請回傳 JSON」並期待一切順利
B. 使用受限解碼或結構化輸出 API（例如帶 JSON schema 的 response_format）結合輸出的 schema 驗證
C. 用正規表達式解析原始文字輸出以擷取 JSON
D. 在 JSON 範例上微調模型並跳過驗證

Answer: B

Hint: 想想保證 vs 盡力而為——哪種方法能強制執行 schema？

Explanation: 受限解碼強制模型產出符合語法或 schema 的 token，而生成後驗證捕捉邊界情況。兩者共同提供接近保證的 schema 合規性，這是僅靠 prompt 指令無法做到的。

Why others wrong: 僅靠 prompt 的方法經常產出格式錯誤的 JSON（A）；正規表達式解析脆弱且在巢狀結構上失敗（C）；微調提高可能性但無法保證合規（D）。

Trap: 信任 prompt 指令來產出結構化輸出——LLM 經常遺漏括號、新增註解或使用錯誤的欄位名稱。

Mnemonic: 結構化輸出 = 受限解碼 + 驗證。信任但要驗證。

## Q20
Type: single
Difficulty: 3
Tags: agent-development, tool-selection
Concepts: dynamic-tool-selection
Domain: Domain 2 — Agent Development
DomainNumber: 2

一個 agent 可存取 50 多個工具。將所有工具描述包含在 prompt 中超出 context window。最有效的策略是什麼？

A. 截斷工具描述以符合 context window
B. 使用兩階段方法：首先透過工具描述的語意搜尋檢索最相關的工具，然後僅將前 k 個工具包含在 agent 的 prompt 中
C. 為每個請求隨機抽樣一組工具
D. 將工具分散到多個 agent 並總是呼叫所有 agent

Answer: B

Hint: 想想 RAG 如何檢索相關文件——相同原則適用於工具選擇。

Explanation: 對工具描述的語意檢索作為工具 RAG 系統：給定使用者查詢，它找到最相關的工具並僅將這些包含在 prompt 中。這保持上下文聚焦並減少不相關的工具幻覺。

Why others wrong: 截斷丟失工具參數的關鍵資訊（A）；隨機抽樣遺漏相關工具（C）；呼叫所有 agent 在不相關工具上浪費資源（D）。

Trap: 包含所有工具並依賴 LLM 忽略不相關的——超過 50 個工具時，模型經常混淆類似工具或幻覺不存在的參數。

Mnemonic: 工具太多？對工具做 RAG——先檢索再包含。

## Q21
Type: single
Difficulty: 2
Tags: agent-development, conversation-management
Concepts: conversation-state-management
Domain: Domain 2 — Agent Development
DomainNumber: 2

在多輪 agentic 對話中，context window 接近其限制。哪種策略在釋放上下文空間的同時保留最相關的資訊？

A. 清除整個對話歷史並重新開始
B. 使用滾動摘要——將較舊的輪次壓縮為摘要，同時保留近期輪次和所有工具呼叫結果的原文
C. 每隔一條訊息刪除以減半上下文
D. 在對話中途切換到更大的模型

Answer: B

Hint: 想想哪些資訊隨時間價值遞減（舊的閒聊）vs 什麼必須保留（近期上下文、工具結果）。

Explanation: 滾動摘要將較舊、較不相關的輪次壓縮為簡潔摘要，同時保留可能被引用的近期互動和工具輸出。這在不丟失關鍵上下文的情況下維持連續性。

Why others wrong: 清除所有東西丟失所有上下文（A）；隔一條刪除建立不連貫的歷史（C）；中途切換模型不釋放上下文且可能失去相容性（D）。

Trap: 過度積極地摘要——如果工具呼叫結果被摘要，agent 可能丟失需要引用的精確值。

Mnemonic: 舊輪次 → 摘要；近期輪次 + 工具結果 → 保留原文

## Q22
Type: single
Difficulty: 1
Tags: agent-development, error-recovery
Concepts: retry-strategies
Domain: Domain 2 — Agent Development
DomainNumber: 2

當 agent 的工具呼叫因暫時性 API 錯誤（HTTP 503）而失敗時，建議的重試策略是什麼？

A. 在緊密迴圈中立即重試直到成功
B. 指數退避加抖動——在重試之間等待逐漸更長的時間並加入隨機變化以避免驚群效應
C. 永不重試——立即向使用者報告錯誤
D. 在固定的 60 秒延遲後恰好重試一次

Answer: B

Hint: 如果 100 個 agent 在共享服務恢復後都同時重試會怎樣？

Explanation: 指數退避增加重試之間的等待時間（1 秒、2 秒、4 秒...）以給故障服務恢復時間。加入抖動（隨機變化）防止多個客戶端的同步重試淹沒服務——驚群問題。

Why others wrong: 緊密迴圈放大了導致 503 的過載（A）；永不重試浪費了快速恢復的機會（C）；固定 60 秒對短暫中斷太僵化且浪費（D）。

Trap: 不加抖動地重試——同步重試建立週期性負載尖峰，阻止恢復。

Mnemonic: 暫時性錯誤 → 指數退避 + 加入隨機性

## Q23
Type: single
Difficulty: 3
Tags: agent-development, tool-composition
Concepts: tool-chaining-patterns
Domain: Domain 2 — Agent Development
DomainNumber: 2

一個 agent 需要：(1) 搜尋資料庫，(2) 用搜尋結果呼叫外部 API，(3) 格式化合併的資料。該 API 有 30% 的失敗率。工具鏈應如何設計？

A. 將所有三個步驟執行為一個內部處理所有事的單一工具呼叫
B. 將每個步驟設計為獨立工具由 agent 編排鏈條，為 API 呼叫實作重試邏輯，並設計在 API 不可用時跳過步驟 2 的後備路徑
C. 平行執行所有三個工具因為它們是獨立的
D. 永久快取 API 結果使步驟 2 永遠不需要再次執行

Answer: B

Hint: 想想關注點分離以及在哪裡處理不可靠的步驟。

Explanation: 獨立工具允許 agent 精細地處理故障——重試不可靠的 API 步驟而不重做資料庫搜尋，並可能在沒有 API 資料的情況下提供降級結果。單體式工具呼叫向 agent 的決策隱藏故障點。

Why others wrong: 單一工具向 agent 隱藏故障點（A）；步驟 2 和 3 依賴先前輸出所以不能平行執行（C）；永久快取導致過時資料（D）。

Trap: 將步驟 2 合併到步驟 1——當 API 失敗時，agent 無法區分搜尋失敗和 API 失敗。

Mnemonic: 不可靠步驟 = 獨立工具 + 重試 + 後備。讓 agent 看到並決定。

## Q24
Type: single
Difficulty: 2
Tags: agent-development, streaming-output
Concepts: streaming-agent-responses
Domain: Domain 2 — Agent Development
DomainNumber: 2

agent 何時應使用串流輸出而非等待完整回應？

A. 僅當回應超過 1000 token 時
B. 當使用者體驗受益於看到漸進式進度時，例如在長推理鏈、多步驟工具使用或文件生成期間
C. 永不——串流引入太多複雜性
D. 僅在使用 GPU 加速時

Answer: B

Hint: 想想使用者坐著等待——什麼時候看到部分進度有幫助？

Explanation: 串流在長時間運行的操作期間透過逐步展示進度提供更好的使用者體驗。對於 agentic 系統，這包括展示正在呼叫哪個工具、中間推理步驟，以及多步驟過程中的部分結果。

Why others wrong: 僅 token 計數不決定串流價值——快速的 2000 token 回應可能不需要它（A）；現代框架良好支援串流（C）；串流與硬體無關（D）。

Trap: 對簡單回應過度串流展示原始 LLM token 生成——串流主要對長時間或多步驟操作增加價值。

Mnemonic: 等很久？串流它。快速回應？直接回傳。

## Q25
Type: single
Difficulty: 2
Tags: agent-development, prompt-versioning
Concepts: prompt-management
Domain: Domain 2 — Agent Development
DomainNumber: 2

在生產 agentic 系統中，為什麼 prompt 範本應與應用程式碼分開進行版本控制？

A. 因為 prompt 變更比程式碼更頻繁，需要獨立的 A/B 測試、回滾和稽核軌跡，而不需要應用程式重新部署
B. 因為 prompt 太大無法儲存在程式碼儲存庫中
C. 因為版本控制系統無法處理文字檔案
D. 因為 prompt 應對開發人員保密

Answer: A

Hint: 想想你調整 prompt 的頻率 vs 部署程式碼變更的頻率。

Explanation: Prompt 在最佳化過程中快速演進，經常需要對即時流量進行 A/B 測試。將 prompt 版本控制與應用程式部署分離實現更快的迭代週期、偵測到 prompt 回歸時的獨立回滾，以及合規的稽核軌跡。

Why others wrong: Prompt 通常是小文字（B）；版本控制完美處理文字（C）；開發人員需要 prompt 存取以除錯（D）。

Trap: 將 prompt 硬編碼在應用程式碼中——它將 prompt 調校耦合到完整的部署管線，將迭代從幾分鐘拖慢到幾小時。

Mnemonic: Prompt 每天改，程式碼每週改——不同節奏需要分開的版本控制

## Q26
Type: multi
Difficulty: 3
Tags: agent-development, guardrails-implementation
Concepts: input-output-safety
Domain: Domain 2 — Agent Development
DomainNumber: 2

為處理使用者上傳文件的 agent 實作安全護欄時，哪兩種保護最關鍵？（選兩個）

A. 檔案類型驗證和大小限制以防止惡意上傳的資源耗盡
B. 掃描文件中嵌入的 prompt injection 嘗試，其中文件文字被設計來劫持 agent 的指令
C. 檢查上傳時間戳記是否在營業時間內
D. 要求使用者在上傳前閱讀服務條款頁面

Answer: A, B

Hint: 想想兩個主要攻擊向量：資源攻擊和基於內容的攻擊。

Explanation: 惡意上傳可以透過兩個向量利用 agent：資源耗盡（例如 10GB 檔案或壓縮炸彈）和基於內容的攻擊（例如隱藏在文件文字中的 prompt injection）。檔案驗證防止前者；掃描注入嘗試的內容防止後者。

Why others wrong: 營業時間限制不能防止攻擊（C）；服務條款接受是法律措施而非技術保障（D）。

Trap: 只驗證檔案類型而不掃描內容——有效的 PDF 可能在其文字中包含 prompt injection，在處理文件時劫持 agent。

Mnemonic: 上傳的兩個攻擊向量：大小/類型炸彈 + 內容注入。兩者都要防護。

## Q27
Type: single
Difficulty: 2
Tags: agent-development, tool-authentication
Concepts: credential-management
Domain: Domain 2 — Agent Development
DomainNumber: 2

Agent 系統應如何管理其呼叫工具的 API 憑證？

A. 將憑證直接嵌入 agent 的 system prompt 中以便在工具呼叫中包含
B. 使用密鑰管理器（例如 HashiCorp Vault、AWS Secrets Manager）搭配短期 token，並在工具執行層注入憑證——永不暴露給 LLM
C. 將憑證儲存在 agent 的對話歷史中以便引用
D. 對所有工具使用相同的 API 金鑰以簡化管理

Answer: B

Hint: 如果 LLM 幻覺並在面向使用者的回應中輸出憑證會怎樣？

Explanation: 憑證絕不能進入 LLM 的上下文，因為模型可能在回應中洩漏它們。密鑰管理器提供短期、可輪換的 token，僅在工具執行層注入，遵循最小權限原則。

Why others wrong: 嵌入 prompt 的憑證可被 LLM 洩漏（A）；對話歷史對使用者可見（C）；共享憑證違反最小權限並使撤銷不可能（D）。

Trap: 將憑證放在 system prompt 中「因為 LLM 需要它們來呼叫工具」——LLM 應選擇工具並提供參數，但憑證注入發生在更低層。

Mnemonic: 憑證：永不在 prompt 中，總是在執行層

## Q28
Type: single
Difficulty: 1
Tags: agent-development, testing
Concepts: agent-testing-strategy
Domain: Domain 2 — Agent Development
DomainNumber: 2

在生產部署前驗證 agent 行為最重要的測試類型是什麼？

A. 驗證個別函式實作的單元測試
B. 模擬真實多輪對話的端到端場景測試，包含預期的工具呼叫和輸出，驗證 agent 在完整工作流程中的決策
C. 僅檢查回應時間的負載測試
D. 開發人員的手動測試

Answer: B

Hint: Agent 的價值在於其決策，而非個別函式。

Explanation: Agent 是決策系統。端到端場景測試驗證完整的決策鏈：給定使用者查詢，agent 是否選擇了正確的工具、正確的順序、正確的參數，並產出正確的最終回應？單元測試遺漏了使 agent 有價值的編排邏輯。

Why others wrong: 單元測試驗證元件但不驗證其編排（A）；負載測試檢查效能而非正確性（C）；手動測試不可擴展且不提供回歸保護（D）。

Trap: 過度投資於工具包裝器的單元測試而忽略 agent 推理和工具選擇行為的場景測試。

Mnemonic: 測試 agent 的決策，而非僅是其部件。場景 > 單元（對 agent 而言）。

## Q29
Type: single
Difficulty: 2
Tags: agent-development, context-injection
Concepts: context-window-optimization
Domain: Domain 2 — Agent Development
DomainNumber: 2

一個 agent 的 context window 是 128K token。對話歷史是 20K，system prompt 是 5K，工具描述佔 15K。還剩多少有效上下文可用於 RAG 檢索文件和推理？

A. 128K——完整上下文始終可用
B. 大約 88K token，但實際容量更低因為模型效能在很長上下文時會下降，所以預算約 60-70K 用於檢索內容
C. 0——上下文已經滿了
D. 108K——只減去 system prompt

Answer: B

Hint: 算術給出 88K，但模型不會完美地使用長上下文——實際限制是什麼？

Explanation: 128K - 20K - 5K - 15K = 88K 原始可用。然而，LLM 效能在「迷失在中間」現象中下降，長上下文中間的資訊較不可能被注意到。實際預算應留有餘地並將關鍵資訊放在開頭和結尾。

Why others wrong: 所有元件競爭上下文空間（A）；上下文遠未滿（C）；工具描述和對話歷史也消耗上下文（D）。

Trap: 使用所有 88K 可用 token——模型注意力在很長上下文的中間減弱，所以有效容量小於原始容量。

Mnemonic: 原始容量 ≠ 有效容量。為「迷失在中間」做預算。

## Q30
Type: single
Difficulty: 3
Tags: agent-development, multi-modal-tools
Concepts: multimodal-agent-development
Domain: Domain 2 — Agent Development
DomainNumber: 2

一個 agent 處理包含文字描述和附加截圖的客戶支援工單。設計工具管線時，關鍵挑戰是什麼？

A. 截圖無法被任何 AI 系統處理
B. 將截圖的視覺內容與文字描述對齊以形成連貫理解，然後基於合併的上下文路由到適當的專家 agent
C. 文字和影像必須始終在不同的對話中處理
D. 截圖應被忽略，只處理文字

Answer: B

Hint: 文字可能說「見截圖中的錯誤」——agent 需要同時理解兩者。

Explanation: 多模態 agent 開發需要跨模態融合資訊。客戶說「截圖中顯示的按鈕不起作用」需要 agent 在視覺上識別按鈕、理解描述的行為，並基於合併的理解進行路由。

Why others wrong: 現代視覺-語言模型能很好地處理截圖（A）；分離模態失去跨引用（C）；忽略截圖遺漏關鍵的診斷資訊（D）。

Trap: 獨立處理文字和影像僅在最後合併——模態之間的跨引用會丟失。

Mnemonic: 多模態 = 早期融合，基於合併理解進行路由

## Q31
Type: single
Difficulty: 2
Tags: evaluation, task-success-rate
Concepts: evaluation-metrics
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

哪個指標最直接衡量 agentic 系統是否達成其預期目標？

A. 每個請求的平均 token 生成量
B. 任務完成率——根據任務規格定義，達到成功結束狀態的使用者請求百分比
C. 模型在保留資料集上的困惑度
D. 每個請求的工具呼叫次數

Answer: B

Hint: Agent 的終極測試是它是否完成了使用者所要求的。

Explanation: 任務完成率直接衡量 agent 是否達成其目標。雖然效率指標（token、工具呼叫）和模型品質指標（困惑度）提供資訊，但它們無法直接指示使用者的目標是否被滿足。

Why others wrong: Token 計數衡量冗長性而非成功（A）；困惑度衡量語言模型品質而非任務完成（C）；更多工具呼叫可能表示低效或徹底——都不與成功直接相關（D）。

Trap: 為代理指標（延遲、token 計數）最佳化而非結果指標（它做完了嗎？）。

Mnemonic: 最佳指標回答：「Agent 完成工作了嗎？」= 任務完成率

## Q32
Type: single
Difficulty: 3
Tags: evaluation, agent-trajectory
Concepts: trajectory-evaluation
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

除了最終輸出正確性，為什麼評估 agent 的軌跡（推理步驟和工具呼叫的序列）很重要？

A. 軌跡評估僅對除錯有用，不適用於生產評估
B. Agent 可能透過不安全、低效或不可靠的推理路徑達到正確答案，這些路徑在略有不同的輸入上會失敗，因此軌跡評估能發現脆弱的成功
C. 軌跡評估取代了輸出評估的需要
D. 僅在 agent 使用超過五個工具時才需要

Answer: B

Hint: 學生可以透過幸運猜測得到正確答案——這和理解一樣嗎？

Explanation: 來自不正確推理的正確輸出是「脆弱的成功」——當輸入略有變化時就會失敗。軌跡評估驗證 agent 的推理路徑是否合理、高效和安全，確保跨多種輸入的可靠效能而非僅在測試集上。

Why others wrong: 軌跡評估在生產中對發現可靠性問題至關重要（A）；軌跡和輸出評估都需要（C）；工具數量與軌跡評估的需要無關（D）。

Trap: 只檢查最終答案是否正確——一個在達到正確答案前做了五次不必要 API 呼叫和一次不安全資料存取的 agent 有問題的軌跡。

Mnemonic: 正確答案，錯誤路徑 = 脆弱。評估旅程，而非僅是終點。

## Q33
Type: single
Difficulty: 2
Tags: evaluation, automated-evaluation
Concepts: llm-as-judge
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

使用 LLM 作為評審來評估另一個 agent 的輸出時，最需要防範的偏見是什麼？

A. 評審 LLM 偏好更長的回應而不論品質（冗長偏見）
B. 評審 LLM 進行即時評估太慢
C. 評審 LLM 需要太多 API 呼叫
D. 評審 LLM 以錯誤語言產出輸出

Answer: A

Hint: 研究顯示 LLM 評審一致性地給較長回應更高評分——即使較短的更準確。

Explanation: 冗長偏見是一個有充分記錄的問題，LLM 評審對較長、更詳細的回應評分高於簡潔正確的答案。其他偏見包括位置偏見（偏好第一個選項）和自我增強偏見（偏好同模型家族的輸出）。緩解措施包括基於評分標準的計分和多評審小組。

Why others wrong: 延遲是操作問題而非品質偏見（B）；API 成本是實際問題而非評估偏見（C）；語言不匹配是配置錯誤而非系統性偏見（D）。

Trap: 不校準就信任 LLM 評審分數——冗長偏見可能使冗長、部分正確的答案得分高於簡潔、完全正確的答案。

Mnemonic: LLM 評審喜歡長答案。校準冗長偏見。

## Q34
Type: single
Difficulty: 1
Tags: evaluation, regression-testing
Concepts: eval-regression-detection
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

更新 agent 的 system prompt 後，哪種評估方法最能發現回歸？

A. 執行幾個手動測試查詢並目視檢查結果
B. 重新執行包含多樣測試案例的綜合評估套件，並將結果與先前 prompt 版本的基線分數比較
C. 僅檢查促使 prompt 變更的特定查詢
D. 部署到生產環境並監控使用者抱怨

Answer: B

Hint: 你怎麼知道修正查詢 X 沒有破壞查詢 Y 和 Z？

Explanation: 帶基線比較的綜合評估套件能跨多樣場景發現意外回歸。Prompt 變更經常對與原始改進目標無關的查詢產生意外副作用。

Why others wrong: 手動測試不可重現或不全面（A）；僅測試動機案例遺漏其他案例的回歸（C）；生產抱怨太晚且成本太高（D）。

Trap: 僅測試 prompt 變更設計要改進的場景——prompt 變更經常在不相關查詢上造成回歸。

Mnemonic: 改了 prompt？跑完整評估套件，不只是修正案例。

## Q35
Type: multi
Difficulty: 3
Tags: evaluation, multi-agent-evaluation
Concepts: evaluating-multi-agent-systems
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

評估多 agent 系統時，哪兩個面向需要超越單一 agent 指標的專門評估？（選兩個）

A. Agent 間通訊品質——agent 是否正確傳遞上下文、維持連貫性，以及是否在交接點避免資訊丟失
B. 使用者介面的字型大小
C. 湧現行為——agent 之間未計劃的互動可能導致迴圈、死結或不斷升級的資源消耗
D. 日誌儀表板的配色方案

Answer: A, C

Hint: 多 agent 系統有單一 agent 永遠不會展現的故障模式。

Explanation: 多 agent 評估必須涵蓋 agent 間協調（交接時的資訊丟失、跨 agent 的上下文退化）和湧現行為（無限委派迴圈、循環依賴造成的死結、資源競爭）。這些故障模式在單一 agent 系統中不存在。

Why others wrong: UI 字型大小和儀表板顏色是樣式問題而非評估指標（B、D）。

Trap: 獨立評估每個 agent 就宣稱系統正常——多 agent 故障從互動中湧現，而非個別 agent 缺陷。

Mnemonic: 多 agent 評估 = 交接品質 + 湧現行為偵測

## Q36
Type: single
Difficulty: 2
Tags: evaluation, cost-tracking
Concepts: agentic-cost-evaluation
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

在 agentic 系統中，為什麼每任務成本比每 token 成本更有用？

A. 因為 agentic 系統中 token 是免費的
B. 因為 agent 在每任務使用的 LLM 呼叫、工具呼叫和重試迴圈差異很大，所以每 token 成本隱藏了完成使用者目標的真實成本
C. 因為每 token 成本無法計算
D. 因為所有任務使用相同數量的 token

Answer: B

Hint: 兩個 agent 可能都回答一個問題——一個用一次呼叫，另一個用五次工具呼叫和三次重試。

Explanation: Agentic 系統在每任務的資源消耗上展現高變異性。簡單查詢可能花費 1K token，而複雜研究任務跨多次 LLM 呼叫加工具呼叫使用 50K token。每任務成本揭示服務使用者請求的真實經濟並啟用準確的預算編製。

Why others wrong: Token 有實際成本（A）；每 token 成本可計算但不充分（C）；任務在 token 使用上差異巨大（D）。

Trap: 最佳化每 token 成本而不關注每任務成本——一個需要 5 倍推理迴圈的更便宜模型每任務可能成本更高。

Mnemonic: 每任務成本 = 完成工作的總成本。Token 是一個組成部分，不是全貌。

## Q37
Type: single
Difficulty: 2
Tags: evaluation, safety-evaluation
Concepts: red-teaming-agents
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

agentic 系統的紅隊測試與標準 LLM 的紅隊測試有何區別？

A. Agentic 紅隊測試只測試 prompt
B. Agentic 紅隊測試還必須測試工具濫用、透過工具鏈的權限升級、透過工具輸出的資料竊取，以及利用 agent 自主決策的多步驟攻擊序列
C. 標準 LLM 比 agent 更難進行紅隊測試
D. Agentic 系統不需要紅隊測試因為護欄就夠了

Answer: B

Hint: Agent 可以做事，不只是說話——這如何改變攻擊面？

Explanation: 標準 LLM 紅隊測試專注於生成有害文字。Agentic 紅隊測試還必須額外測試攻擊者是否能操縱 agent 採取有害行動：呼叫非預期工具、存取未授權資料，或串連工具呼叫以升級超出任何單一呼叫允許的權限。

Why others wrong: Prompt 測試只是 agentic 紅隊測試的一個組成部分（A）；agent 有比純文字 LLM 更大的攻擊面（C）；護欄應被測試而非假設足夠（D）。

Trap: 只對 LLM 元件進行紅隊測試而忽略工具濫用——最危險的 agent 攻擊利用的是工具呼叫迴圈而非文字生成。

Mnemonic: LLM 紅隊 = 有害文字。Agent 紅隊 = 有害文字 + 有害行動。

## Q38
Type: single
Difficulty: 2
Tags: evaluation, latency-analysis
Concepts: agentic-latency-profiling
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

一個 agent 的端到端回應時間是 12 秒。剖析顯示：LLM 推論（3 次呼叫）= 6 秒，工具執行 = 4 秒，網路開銷 = 2 秒。哪種最佳化產出最大改善？

A. 切換到稍快的 LLM，每次呼叫節省 0.5 秒
B. 平行化兩個目前循序執行的獨立工具呼叫，將工具時間從 4 秒降至約 2.5 秒
C. 壓縮網路酬載以節省 0.2 秒
D. 新增快取層，但因為查詢是唯一的所以不會有幫助

Answer: A

Hint: 計算實際節省：0.5 秒 × 3 次呼叫 vs 4 秒 - 2.5 秒 vs 0.2 秒節省。

Explanation: 更快的 LLM 節省 0.5 秒 × 3 次呼叫 = 總共 1.5 秒。平行化工具節省約 1.5 秒（4 秒 → 2.5 秒）。兩者產出類似的節省，但 LLM 最佳化適用於所有請求，而工具平行化只在有獨立工具時有幫助。更仔細地看選項：A 節省 1.5 秒，B 節省 1.5 秒，C 節省 0.2 秒。A 是最佳的單一最佳化因為它對每個請求路徑都有益。

Why others wrong: B 節省同樣的量但只對有可平行化工具的請求有效；C 只節省 0.2 秒；D 被說明為不適用。

Trap: 最佳化最小的元件（網路）因為看起來最容易——總是先最佳化最大的貢獻者。

Mnemonic: 先剖析，最佳化最大貢獻者。3 次 LLM 呼叫 × 節省 = 乘數效應。

## Q39
Type: single
Difficulty: 3
Tags: evaluation, fine-tuning-decision
Concepts: fine-tune-vs-prompt
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

一個 agent 僅靠 prompt engineering 就能正確處理 85% 的客戶查詢。微調可以提高到 92%，但需要標註資料和持續維護。什麼時候微調是合理的？

A. 總是——更高的準確率總是值得成本
B. 當 7% 的改善解決高風險查詢（例如帳務錯誤、安全問題）時，失敗成本超過持續的微調投資，且查詢分布足夠穩定以合理化維護
C. 永不——prompt engineering 總是足夠
D. 僅當模型參數少於 7B 時

Answer: B

Hint: 把它當作成本效益分析：那 15% 失敗的成本 vs 微調的成本是什麼？

Explanation: 微調決策應基於改善的業務影響。如果 7% 的改善涵蓋高價值或高風險場景，投資回報率合理化了投資。但如果失敗的 15% 是低風險查詢，85% 準確率的 prompt engineering 可能是最佳的成本-效能點。

Why others wrong: 準確率改善必須合理化成本（A）；prompt engineering 有局限且微調有其角色（C）；模型大小不是決定因素（D）。

Trap: 反射性地微調以追求更高準確率而不分析改善目標是否重要。

Mnemonic: 當失敗成本 × 改善 > 微調成本 + 維護時才微調

## Q40
Type: single
Difficulty: 2
Tags: evaluation, hallucination-detection
Concepts: groundedness-evaluation
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

哪個評估指標專門衡量 agent 的回應是否有檢索到的上下文支持而非捏造？

A. BLEU 分數
B. 基於事實性——回應中的主張可歸因於所提供來源文件的比例
C. F1 分數
D. 回應延遲

Answer: B

Hint: 你想知道：這個事實在文件中嗎，還是 agent 捏造的？

Explanation: 基於事實性衡量 agent 輸出中的每個主張是否有檢索到文件中的證據支持。它專門針對幻覺——agent 生成的在所提供上下文中沒有依據的內容。這對基於 RAG 的 agent 至關重要，其中事實準確性取決於檢索品質。

Why others wrong: BLEU 衡量與參考的 n-gram 重疊而非事實基礎（A）；F1 衡量精確率/召回率而非來源歸因（C）；延遲衡量速度而非準確性（D）。

Trap: 使用 BLEU 或 ROUGE 作為基於事實性的代理指標——它們衡量與參考文本的表面相似度而非主張是否有來源文件支持。

Mnemonic: 基於事實性 = 「我能在文件中找到這個嗎？」幻覺 = 「不能，agent 編造的」

## Q41
Type: single
Difficulty: 1
Tags: deployment, inference-optimization
Concepts: model-serving-optimization
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

為 agentic 系統部署 LLM 時，將多個推論請求批次處理的主要目的是什麼？

A. 降低回應品質
B. 透過在單一前向傳播中處理多個請求來提高 GPU 利用率，將模型權重載入的固定開銷分攤到多個請求上
C. 確保請求按時間順序處理
D. 減少模型的參數量

Answer: B

Hint: GPU 在平行處理多個 token 時最有效率，而非一次一個請求。

Explanation: 批次處理將載入模型權重和利用 GPU 計算的固定成本分攤到多個請求上。單一請求可能只使用 GPU 容量的 10%，而 8 個請求的批次可以達到 80%+ 利用率，大幅提高吞吐量和成本效率。

Why others wrong: 批次處理不影響品質（A）；排序由佇列處理而非批次處理（C）；批次處理不改變模型大小（D）。

Trap: 以為批次處理只幫助吞吐量——它也透過共享 GPU 資源降低每請求成本。

Mnemonic: 批次 = 填滿 GPU。閒置 GPU = 浪費金錢。

## Q42
Type: single
Difficulty: 2
Tags: deployment, blue-green
Concepts: deployment-strategies
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

一家公司想要以零停機和即時回滾能力部署更新的 agent。哪種部署策略最適合？

A. 停止舊 agent，部署新 agent，然後啟動它
B. 藍綠部署——在舊版本旁邊執行新版本，驗證後切換流量，保持舊版本運行以便即時回滾
C. 直接部署到生產環境並監控錯誤
D. 在排定的維護窗口期間部署

Answer: B

Hint: 如何在零停機和一鍵回滾的情況下測試新版本？

Explanation: 藍綠部署維持兩個相同的環境。驗證後流量切換到新（綠）環境，而舊（藍）環境保持運行。如果偵測到問題，流量立即切回藍色——實現零停機和即時回滾。

Why others wrong: 停止舊 agent 造成停機（A）；直接生產部署沒有回滾（C）；維護窗口造成停機（D）。

Trap: 將藍綠與金絲雀部署混淆——藍綠一次切換所有流量，而金絲雀逐步增加流量到新版本。

Mnemonic: 藍 = 舊，綠 = 新。綠色有問題？立即切回藍色。

## Q43
Type: single
Difficulty: 3
Tags: deployment, resource-management
Concepts: gpu-memory-planning
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

一個 agentic 系統使用 70B 參數的模型搭配 16 位元精度。每個 agent 實例還需要約 2GB 的 KV-cache。在一個具有 8×A100 80GB GPU 且使用跨所有 8 個 GPU 的 tensor parallelism 的節點上，可以同時執行多少個 agent 實例？

A. 1 個實例，沒有更多空間
B. 大約 2 個實例——模型需要約 140GB 分佈在 8 個 GPU 上（每個 GPU 17.5GB），KV-cache 每個實例每個 GPU 分片增加約 2GB，為第二個實例留有空間
C. 50 個實例因為 GPU 有無限記憶體
D. 0 個實例——模型放不下

Answer: B

Hint: 計算：70B × 2 位元組 = 140GB 模型權重。總 GPU 記憶體 = 8 × 80GB = 640GB。還剩多少？

Explanation: 模型權重：70B × 2 位元組（fp16）= 140GB 分佈在 8 個 GPU = 每個 GPU 17.5GB。KV-cache：每個實例約 2GB 分佈在 GPU 上。每個 GPU 可用：80 - 17.5 = 62.5GB。這允許多個實例，但 KV-cache 隨序列長度和批次大小增長，實際上將並行實例限制在約 2-3 個，留有舒適的餘量。

Why others wrong: 顯然有超過 1 個的空間（A）；GPU 記憶體是有限的（C）；模型可以輕鬆放入 8 個 GPU（D）。

Trap: 忘記 KV-cache 隨序列長度和批次大小擴展——長上下文的 agent 對話可能消耗遠超 2GB 基線估計的記憶體。

Mnemonic: 模型權重 + 每實例 KV-cache = 總 GPU 預算。別忘了 KV-cache 會增長！

## Q44
Type: single
Difficulty: 2
Tags: deployment, auto-scaling
Concepts: scaling-policies
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

對於具有可變請求複雜度的 agentic 推論服務，哪個自動擴展指標最適合？

A. CPU 利用率百分比
B. 請求佇列深度（待處理請求數）——因為可變複雜度意味著 CPU/GPU 利用率與需求不成線性相關
C. 網路頻寬使用量
D. 每秒磁碟 I/O 操作

Answer: B

Hint: 簡單查詢和 10 次工具呼叫的複雜查詢使用非常不同的資源——哪個指標捕捉需求而不受每請求資源變異影響？

Explanation: 佇列深度直接衡量未滿足需求而不受個別請求複雜度影響。GPU/CPU 利用率可能有誤導性，因為少數複雜請求可能顯示高利用率而許多簡單請求在排隊，或反之。佇列深度捕捉使用者面對的現實：請求在等待嗎？

Why others wrong: CPU 利用率隨請求複雜度變化而非僅需求（A）；網路頻寬不反映計算需求（C）；LLM 推論是計算密集型而非 I/O 密集型（D）。

Trap: 使用 GPU 利用率——它可能在服務一個很長的複雜請求時達到 90%，而 50 個簡單請求在佇列中等待。

Mnemonic: 可變複雜度 → 佇列深度。它衡量使用者感受到的：他們在等待嗎？

## Q45
Type: single
Difficulty: 2
Tags: deployment, model-routing
Concepts: multi-model-routing
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

一個 agentic 系統根據查詢複雜度將請求路由到不同大小的模型。簡單分類使用 7B 模型，複雜推理使用 70B 模型。這種部署模式叫什麼？

A. 模型蒸餾
B. 模型路由或級聯——將請求導向能處理任務複雜度的最具成本效益的模型
C. 模型微調
D. 模型集成

Answer: B

Hint: 把它想成基於複雜度的流量路由——像快速結帳和一般結帳通道。

Explanation: 模型路由根據任務複雜度將請求導向適當大小的模型，最佳化成本-品質取捨。簡單任務不需要昂貴的大型模型，而複雜任務從中受益。當小模型先嘗試並在失敗時升級到更大模型時，有時稱為模型級聯。

Why others wrong: 蒸餾是從較大模型建立較小模型（A）；微調是專門化模型（C）；集成是對同一查詢結合多個模型的輸出（D）。

Trap: 對所有事都使用最大模型「以求安全」——大多數查詢可由較小模型以小部分成本處理。

Mnemonic: 簡單查詢 → 小模型。複雜查詢 → 大模型。按複雜度路由。

## Q46
Type: single
Difficulty: 3
Tags: deployment, state-management
Concepts: session-state-deployment
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

多輪 agent 系統部署在負載均衡器後的多個副本上。應如何管理 session 狀態以確保對話連續性？

A. 使用黏著 session 將每個使用者固定到特定副本
B. 將所有 session 狀態外部化到分散式儲存（Redis、DynamoDB）搭配 session ID，使任何副本都能服務任何請求——避免黏著 session 造成的熱點並簡化容錯
C. 將 session 狀態儲存在每個副本的本地記憶體中
D. 要求使用者在每次訊息中重新發送他們的整個對話歷史

Answer: B

Hint: 當黏著 session 固定的副本當機時會怎樣？

Explanation: 外部狀態儲存將 session 狀態與特定副本解耦，實現真正的無狀態擴展。任何副本可以透過從共享儲存載入狀態來服務任何請求。黏著 session 造成不均勻負載、複雜化擴展，並在副本故障時丟失狀態。

Why others wrong: 黏著 session 造成熱點和單點故障（A）；本地記憶體在重啟或擴展事件時丟失（C）；重新發送完整歷史浪費頻寬且在長對話時失敗（D）。

Trap: 為了簡潔使用黏著 session——它們在副本故障時會失效且所有被固定的使用者丟失對話狀態。

Mnemonic: 無狀態副本 + 共享狀態儲存 = 自由擴展，優雅容錯

## Q47
Type: single
Difficulty: 1
Tags: deployment, containerization
Concepts: container-best-practices
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

將 agent 服務容器化以進行部署的主要好處是什麼？

A. 容器使 LLM 產生更好的回應
B. 容器將 agent 及其所有依賴打包成可攜式、可重現的單元，在開發、預備和生產環境中一致運行
C. 容器消除 GPU 的需要
D. 容器自動修正 agent 程式碼中的 bug

Answer: B

Hint: 「在我的機器上可以跑」——容器解決這個問題。

Explanation: 容器化透過將 agent、其執行環境、程式庫和配置打包成自包含映像來確保環境一致性。這消除了「在我的機器上可以跑」的問題並實現跨不同環境的可靠部署。

Why others wrong: 容器不影響模型品質（A）；容器可使用 GPU 穿透但不消除需要（C）；容器打包程式碼而非修正（D）。

Trap: 以為容器只適用於微服務——agent 系統同樣受益於可重現、可攜式的部署單元。

Mnemonic: 容器 = 到處一致的環境。一次打包，處處執行。

## Q48
Type: multi
Difficulty: 3
Tags: deployment, edge-deployment
Concepts: edge-agent-deployment
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

在邊緣（本地端或設備端）部署 agentic 系統時，哪兩個約束與雲端部署差異最大？（選兩個）

A. 有限的計算資源需要較小、量化的模型和仔細的記憶體管理
B. 使用者認證的需要
C. 受限或間歇性的網路連線需要本地工具執行和離線可用的 agent 工作流程
D. 版本控制的需要

Answer: A, C

Hint: 邊緣 = 較少計算 + 較少網路。這如何改變 agent 設計？

Explanation: 邊緣部署約束計算（需要模型壓縮、量化、較小模型）和網路（需要離線可用的工作流程、本地工具執行、快取知識）。雲端部署假設充足的計算和可靠的連線，因此 agent 設計必須根本性地適應。

Why others wrong: 認證在邊緣和雲端都需要（B）；版本控制是開發問題而非部署約束（D）。

Trap: 將雲端設計的 agent 部署到邊緣而不適應——大型模型放不下，雲端 API 工具在離線時不能用。

Mnemonic: 邊緣 = 小模型 + 離線工具。雲端 ≠ 邊緣。

## Q49
Type: single
Difficulty: 2
Tags: deployment, canary-release
Concepts: canary-deployment
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

金絲雀部署與藍綠部署在 agentic 系統中有何不同？

A. 金絲雀部署比藍綠更快
B. 金絲雀部署逐步將一小比例的流量切換到新版本，在增加前監控問題，而藍綠一次切換所有流量
C. 藍綠需要比金絲雀更多的伺服器
D. 金絲雀部署不需要監控

Answer: B

Hint: 煤礦中的金絲雀早期偵測危險——這個比喻如何應用到部署？

Explanation: 金絲雀部署首先將一小比例（例如 5%）的流量路由到新版本。如果指標看起來好，流量逐漸增加。這限制了影響範圍——如果新版本有問題只有一小部分使用者受影響。藍綠一次切換 100%。

Why others wrong: 速度取決於配置而非策略（A）；兩者都需要同時執行兩個版本（C）；監控對金絲雀至關重要——它是你決定增加流量的方式（D）。

Trap: 使用金絲雀而沒有適當的指標——如果你無法在 5% 流量時偵測到退化，你會推廣一個有問題的版本。

Mnemonic: 金絲雀 = 先小測試，逐步增長。藍綠 = 全有或全無的切換。

## Q50
Type: single
Difficulty: 2
Tags: cognition, reasoning-frameworks
Concepts: cot-vs-react
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

Chain-of-Thought（CoT）推理和 ReAct（Reasoning + Acting）在 agentic 系統中的關鍵區別是什麼？

A. CoT 比 ReAct 更快
B. CoT 在產出答案前生成推理鏈，而 ReAct 將推理步驟與工具行動交錯，允許 agent 觀察真實世界回饋並在執行中調整計畫
C. ReAct 不能使用工具
D. CoT 需要微調而 ReAct 適用任何模型

Answer: B

Hint: CoT 先想後答。ReAct 想、做、觀察、再想——一個迭代迴圈。

Explanation: CoT 產出線性推理鏈導向結論。ReAct 透過將推理（「我需要搜尋 X」）與行動（實際搜尋）和觀察（處理搜尋結果）交錯來擴展，建立一個適應真實世界資訊的回饋迴圈。

Why others wrong: ReAct 由於工具呼叫通常更慢（A）；ReAct 明確整合工具行動（C）；兩者都透過提示工作（D）。

Trap: 將 CoT 和 ReAct 視為可互換——CoT 是純推理而 ReAct 將推理建立在真實世界觀察之上。

Mnemonic: CoT = 想→答。ReAct = 想→做→觀察→想→...

## Q51
Type: single
Difficulty: 3
Tags: cognition, tree-of-thought
Concepts: tot-reasoning
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

Tree-of-Thought（ToT）推理同時探索多條推理路徑並修剪無前景的分支。與線性 CoT 相比，ToT 對哪種 agentic 任務最有益？

A. 簡單的事實問答
B. 具有多種可行策略的複雜規劃任務，早期承諾一條路徑可能導致死胡同，例如多步驟除錯或策略決策
C. Token 分類任務
D. 語言間的文本翻譯

Answer: B

Hint: 什麼時候在承諾前探索多條路徑比遵循一條路徑更有價值？

Explanation: ToT 在問題空間有多種可行方法和死胡同時表現出色。透過平行探索多個推理分支並在承諾前評估部分解決方案，ToT 避免了線性 CoT 的「承諾陷阱」，即早期錯誤假設損壞整個推理鏈。

Why others wrong: 簡單問答不受益於分支探索（A）；分類通常是單步驟（C）；翻譯遵循線性輸入→輸出模式（D）。

Trap: 對每個任務都應用 ToT——探索多個分支的開銷僅在搜尋空間複雜且死胡同代價高昂時才合理。

Mnemonic: ToT = 探索多條路徑，修剪壞的。最適合有死胡同的複雜決策。

## Q52
Type: single
Difficulty: 2
Tags: cognition, working-memory
Concepts: agent-working-memory
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

一個 agent 在多步驟分析中處理長文件。哪種工作記憶策略防止分析步驟間的資訊丟失？

A. 完全依賴 LLM 的 context window 保存所有中間結果
B. 使用草稿板——結構化工作記憶，在外部鍵值儲存中儲存中間結果、擷取的事實和部分結論，在每步將相關條目注入 prompt
C. 丟棄中間結果並在需要時重新推導
D. 將整個文件壓縮為單一嵌入向量

Answer: B

Hint: 人類使用筆記本追蹤複雜分析——agent 需要等價物。

Explanation: 草稿板為中間結果提供持久化的結構化儲存，agent 可以在推理步驟間讀取和寫入。與僅依賴上下文不同，它能在 context window 限制中存續並提供對先前計算的有組織、可查詢的存取。

Why others wrong: Context window 有限且較舊的資訊會被降低優先級（A）；重新推導浪費計算且可能產出不同結果（C）；單一嵌入丟失所有結構細節（D）。

Trap: 信任 context window 在多步驟中完美保留中間結果——對中間內容的注意力會退化。

Mnemonic: 草稿板 = agent 的筆記本。寫下來，讀回去，永不丟失中間工作。

## Q53
Type: single
Difficulty: 3
Tags: cognition, self-reflection
Concepts: reflection-mechanism
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

一個 agent 完成任務但產出不正確的結果。反思機制審查輸出、識別錯誤並觸發修正嘗試。遞迴自我反思的主要風險是什麼？

A. Agent 在更多反思回合中總是會產出更好的結果
B. 無限反思迴圈——agent 可能反覆在其修正中識別「錯誤」而永不收斂到最終答案，或可能透過過度修正退化一個正確答案
C. 反思在計算上是免費的
D. 自我反思消除人類評估的需要

Answer: B

Hint: 如果修正版更差怎麼辦，促使另一個也是錯誤的「修正」？

Explanation: 遞迴反思可能在不同的錯誤答案之間振盪或過度修正一個好答案。沒有停止條件（最大迭代、信心閾值、收斂檢查），agent 可能無限迴圈。此外，每回合反思消耗 token 和時間，因此收益遞減會很快出現。

Why others wrong: 更多反思可能透過過度修正退化結果（A）；反思有 token/延遲成本（C）；自動化反思補充而非取代人類評估（D）。

Trap: 不設定最大反思深度——反思迴圈是 agentic 系統中最常見的故障模式之一。

Mnemonic: 反思但設定限制。最多 2-3 輪然後停止。無限反思 = 無限成本。

## Q54
Type: single
Difficulty: 2
Tags: cognition, plan-execution
Concepts: plan-and-execute
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

在 plan-and-execute agent 模式中，當計畫步驟的執行產出意外結果時會怎樣？

A. Agent 應不管怎樣繼續剩餘的計畫步驟
B. Agent 應重新評估計畫，根據意外觀察潛在地重新規劃剩餘步驟，同時保留成功完成步驟的結果
C. 整個計畫應被丟棄並從頭重新開始執行
D. 意外結果應被忽略

Answer: B

Hint: 軍事規劃有一句話：「沒有計畫能在與敵人首次接觸後存活。」

Explanation: 適應性重新規劃保留已完成的工作同時根據新資訊調整未來步驟。這比重新開始更有效率，也比盲目繼續假設被違反的計畫更穩健。

Why others wrong: 繼續違反假設的計畫導致連鎖故障（A）；完全重啟浪費已完成的工作（C）；忽略意外結果導致不正確的結果（D）。

Trap: 要麼僵硬地遵循原始計畫要麼完全重啟——中間地帶是利用已完成工作的部分重新規劃。

Mnemonic: 計畫 → 執行 → 驚喜？→ 重新規劃剩餘步驟，保留完成的工作。

## Q55
Type: single
Difficulty: 2
Tags: cognition, long-term-memory
Concepts: episodic-semantic-memory
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

一個擔任客服角色的 agent 需要記住跨 session 的過去互動。哪種記憶類型儲存「這位使用者上個月有帳務糾紛，以退款解決」？

A. 程序性記憶——如何執行任務
B. 情節記憶——具有時間和情境細節的特定過去事件和經歷
C. 語意記憶——一般知識和事實
D. 工作記憶——當前任務狀態

Answer: B

Hint: 這是一個在特定時間發生的特定事件——不是一般知識。

Explanation: 情節記憶儲存帶有上下文（誰、什麼、何時、何地、如何）的特定過去事件。特定客戶的帳務糾紛是一個情節，不是一般知識（語意）或技能（程序性）。檢索情節記憶允許 agent 根據歷史個性化互動。

Why others wrong: 程序性記憶儲存技能和程序（A）；語意記憶儲存一般事實如「退款需要 5-7 個工作天」（C）；工作記憶是當前任務的短期記憶（D）。

Trap: 將客戶歷史儲存為語意記憶——它丟失了引用個別過去互動所需的時間上下文和特異性。

Mnemonic: 情節 = 「記得那次……」語意 = 「一般來說，……」

## Q56
Type: single
Difficulty: 1
Tags: cognition, context-window
Concepts: context-management-strategy
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

當 agent 的對話超過 LLM 的 context window 時，最常見的緩解方法是什麼？

A. 當機並重新開始對話
B. 滑動窗口搭配摘要——摘要較舊的訊息並僅保留最近的訊息全文，同時維持近期上下文的連續性和細節
C. 靜默截斷對話的開頭
D. 切換到具有無限 context window 的模型

Answer: B

Hint: 想想你如何處理一個很長的會議——你記住之前討論的摘要和最近觀點的細節。

Explanation: 滑動窗口搭配摘要透過保留較舊上下文的摘要同時完整保留近期訊息的細節來維持對話連續性。這平衡了完整性（沒有完全丟失）和近期性（近期上下文完全詳細）。

Why others wrong: 當機是不可接受的使用者體驗（A）；靜默截斷在不告知的情況下丟失早期上下文（C）；沒有模型有無限上下文（D）。

Trap: 不帶摘要的簡單截斷——它丟棄可能包含關鍵資訊如使用者原始意圖的早期上下文。

Mnemonic: 舊輪次 → 摘要。近期輪次 → 全文。永遠不要直接丟棄。

## Q57
Type: single
Difficulty: 3
Tags: cognition, meta-reasoning
Concepts: metacognitive-monitoring
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

一個 agent 能評估自己對回應的信心並決定是直接回答還是尋求額外資訊。這個能力叫什麼？

A. 模型蒸餾
B. 後設認知監控——評估自己推理品質和知識缺口的能力，使得能校準地決定何時行動 vs 何時收集更多資訊
C. 遷移學習
D. 梯度下降

Answer: B

Hint: 「思考你自己的思考」——哪個認知科學術語描述這個？

Explanation: 後設認知監控允許 agent 評估自己的信心、識別知識缺口，並決定目前的資訊是否足以行動或是否需要呼叫工具、提出澄清問題或交由人類處理。這對可靠的 agentic 系統至關重要。

Why others wrong: 蒸餾是模型壓縮（A）；遷移學習跨領域應用知識（C）；梯度下降是最佳化演算法（D）。

Trap: 假設 LLM 無法評估自己的信心——雖然校準不完美，但訓練過的信心估計是可能的且對路由決策有用。

Mnemonic: 後設認知 = agent 知道自己不知道什麼

## Q58
Type: single
Difficulty: 1
Tags: knowledge-integration, chunking
Concepts: document-chunking
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

為基於 RAG 的 agent 準備文件時，為什麼分塊大小很重要？

A. 分塊大小只影響儲存成本
B. 太小的分塊丟失上下文並遺漏跨段落關係，而太大的分塊用雜訊稀釋相關資訊並在檢索時浪費 context window 空間
C. 所有分塊必須恰好是 512 token
D. 分塊大小不重要因為 embedding 模型能處理任何大小

Answer: B

Hint: 金髮姑娘問題——太小丟失上下文，太大增加雜訊。

Explanation: 分塊大小是關鍵的 RAG 參數。小分塊可能將一個概念分割到兩個分塊中，使兩者都無法獨立使用。大分塊包含不相關的資訊，稀釋訊號並浪費寶貴的 context window 空間。最佳大小取決於文件類型和查詢模式。

Why others wrong: 分塊大小主要影響檢索品質而非儲存（A）；最佳大小因用例而異（C）；embedding 模型有輸入限制且品質在不匹配大小時下降（D）。

Trap: 使用一體適用的分塊——結構化文件（表格、程式碼）需要與散文段落不同的分塊策略。

Mnemonic: 分塊太小 → 丟失上下文。分塊太大 → 雜訊。找到甜蜜點。

## Q59
Type: single
Difficulty: 2
Tags: knowledge-integration, reranking
Concepts: retrieval-reranking
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

在 RAG 管線中，初始向量相似度搜尋後的重排序器有什麼目的？

A. 產生額外的搜尋結果
B. 應用更複雜的交叉編碼器模型聯合評分每個查詢-文件對，提高超出雙編碼器相似度能達成的相關性排名
C. 移除所有檢索到的文件
D. 將文件翻譯成不同語言

Answer: B

Hint: 雙編碼器獨立嵌入查詢和文件。交叉編碼器一起看它們。哪個更好地捕捉互動？

Explanation: 雙編碼器相似度搜尋速度快但獨立編碼查詢和文件，遺漏細粒度的互動。交叉編碼器重排序器聯合處理查詢-文件對，捕捉細微的相關性訊號。這種兩階段方法（快速檢索然後精確重排序）平衡速度和品質。

Why others wrong: 重排序器重新排序而非產生（A）；重排序器過濾和重排序而非移除所有（C）；重排序器評估相關性而非翻譯（D）。

Trap: 因為「embedding 相似度夠好」而跳過重排序——重排序通常對複雜查詢改善 10-30% 的檢索品質。

Mnemonic: 檢索多個（快速、近似）→ 重排序少數（慢速、精確）

## Q60
Type: single
Difficulty: 3
Tags: knowledge-integration, multi-index
Concepts: multi-source-retrieval
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

一個 agent 需要使用來自內部文件（每週更新）、即時 API 資料（即時價格）和歷史資料庫（SQL）的知識來回答查詢。知識整合應如何設計？

A. 將所有東西轉換為嵌入放在單一向量儲存中
B. 使用路由器分類查詢意圖以確定要查詢哪些知識來源，為每種來源類型提供專用檢索管線：文件用向量搜尋、即時資料用 API 呼叫、結構化歷史資料用 SQL
C. 總是對每個查詢查詢所有三個來源
D. 僅使用最近更新的來源

Answer: B

Hint: 不同的資料類型需要不同的檢索方法——你能對即時 API 資料使用 SQL 嗎？

Explanation: 每個知識來源有不同的存取模式、新鮮度需求和查詢介面。基於路由器的架構分類查詢以確定哪些來源相關，然後為每種類型使用專用檢索。這比強制所有資料進入一種格式更有效率和準確。

Why others wrong: 嵌入即時 API 資料失去即時新鮮度，且 SQL 資料需要結構化查詢（A）；查詢所有來源浪費資源並可能引入雜訊（C）；最近 ≠ 相關（D）。

Trap: 強制所有知識進入向量儲存——結構化資料（SQL）和即時資料（API）透過其原生介面存取更好。

Mnemonic: 不同資料，不同存取。按查詢類型路由，按資料類型檢索。

## Q61
Type: single
Difficulty: 2
Tags: knowledge-integration, knowledge-freshness
Concepts: incremental-indexing
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

一個擁有 100,000 份文件的知識庫每天收到約 500 次更新。什麼索引策略平衡新鮮度和資源效率？

A. 每小時全部重新索引所有 100,000 份文件
B. 增量索引——透過時間戳記或內容雜湊偵測變更的文件，僅重新索引修改過的文件，並定期全面重新索引以捕捉漂移
C. 初始載入後永不重新索引
D. 每小時隨機重新索引 1% 的文件

Answer: B

Hint: 每天只有 0.5% 的文件變更——為什麼要重新處理其他 99.5%？

Explanation: 增量索引僅處理變更的文件，與全面重新索引相比減少約 99.5% 的計算。定期全面重新索引捕捉任何被變更偵測遺漏的文件。這種方法平衡新鮮度（新內容快速被索引）和效率（未變更的內容不被重新處理）。

Why others wrong: 全面重新索引在未變更文件上浪費資源（A）；永不重新索引意味著答案引用過時內容（C）；隨機重新索引不保證捕捉更新（D）。

Trap: 「為了安全」而全面重新索引——在 100K 文件的情況下，這在計算上很昂貴且在每天只有 500 個變更時不必要。

Mnemonic: 100K 中的 500 個變更 → 只索引 500 個。定期全面重索引作為安全網。

## Q62
Type: single
Difficulty: 2
Tags: knowledge-integration, metadata-filtering
Concepts: metadata-enriched-retrieval
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

中繼資料過濾如何改善 RAG 檢索品質？

A. 它使嵌入生成更快
B. 它在計算向量相似度之前縮小搜尋空間——例如按文件日期、部門或存取層級過濾——減少不相關結果並提高精確度
C. 它取代向量嵌入的需要
D. 它增加回傳的結果數量

Answer: B

Hint: 搜尋 100K 文件 vs 搜尋相關部門的 5K 文件——哪個更精確？

Explanation: 中繼資料過濾在語意搜尋前套用結構化約束（日期範圍、類別、存取層級）以縮小候選集。這防止語意相似但情境不相關的文件出現在結果中——例如在搜尋「部署指南」前按「工程部門」過濾。

Why others wrong: 中繼資料過濾不影響嵌入速度（A）；它補充而非取代向量搜尋（C）；它透過過濾減少結果而非增加（D）。

Trap: 僅依賴語意相似度而不用中繼資料過濾——行銷「部署指南」和工程「部署指南」可能語意相似但情境非常不同。

Mnemonic: 中繼資料過濾 = 搜尋針之前先縮小乾草堆

## Q63
Type: multi
Difficulty: 3
Tags: knowledge-integration, graph-rag
Concepts: knowledge-graph-integration
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

一個 agent 必須回答需要推理實體關係的複雜查詢（例如「哪些產品與我們最高營收產品共享供應商？」）。哪兩種方法共同提供最佳解決方案？（選兩個）

A. 對產品描述的標準向量 RAG
B. 明確建模實體關係（產品、供應商、營收）的知識圖譜，啟用圖形遍歷查詢
C. 將所有資料儲存在平面 CSV 檔案中
D. 結合圖形查詢進行關係遍歷和向量 RAG 進行非結構化上下文的混合方法，使用圖形識別相關實體並用 RAG 以詳細描述豐富

Answer: B, D

Hint: 關係需要圖形結構；描述需要語意搜尋。哪個組合涵蓋兩者？

Explanation: 知識圖譜擅長需要遍歷實體間連接的關係感知查詢。混合圖形+向量 RAG 結合圖形的結構推理與向量搜尋的語意理解，啟用「哪些實體有連接？」和「告訴我更多關於這個實體」。

Why others wrong: 標準向量 RAG 不捕捉明確關係（A）；平面 CSV 無法表達圖形關係或啟用遍歷（C）。

Trap: 對關係查詢只使用向量 RAG——嵌入相似度找到相似描述但無法遍歷「的供應商」或「營收大於」的關係。

Mnemonic: 關係 → 圖形。描述 → 向量。複雜查詢 → 兩者。

## Q64
Type: single
Difficulty: 2
Tags: knowledge-integration, embedding-models
Concepts: embedding-model-selection
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

為基於 RAG 的 agent 選擇 embedding 模型時，應優先考慮哪個因素？

A. Embedding 模型的參數量——越大越好
B. 領域特定的檢索品質——模型在你的特定用例中區分相關與不相關文件的能力，透過代表性查詢的檢索基準測試來衡量
C. 模型的文字生成品質
D. 模型的訓練日期——最新總是最好

Answer: B

Hint: 對法律文件完美的 embedding 模型可能在醫療文本上表現差。重要的是什麼？

Explanation: Embedding 模型應根據你特定領域的檢索品質來評估。在領域相關資料上微調的較小模型通常優於較大的通用模型。評估應使用來自你實際用例的代表性查詢和文件。

Why others wrong: 較大模型不一定對特定領域更好（A）；embedding 模型不產生文字（C）；更新不意味著對特定領域更好（D）。

Trap: 選擇一般基準測試（MTEB）上排名最高的模型而不在你的領域上測試——基準排名不完美地跨領域轉移。

Mnemonic: 最佳 embedding = 對你的領域最好的檢索。基準 ≠ 你的用例。

## Q65
Type: single
Difficulty: 1
Tags: knowledge-integration, hybrid-search
Concepts: hybrid-search-strategy
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

為什麼生產 RAG 系統經常結合關鍵字搜尋（BM25）與向量語意搜尋？

A. 為了加倍結果數量
B. 關鍵字搜尋捕捉語意搜尋可能遺漏的精確匹配（產品代碼、錯誤 ID、專有名詞），而語意搜尋捕捉改述或概念相關的查詢——兩者共同提供更廣的覆蓋
C. 因為向量搜尋總是壞掉的
D. 因為關鍵字搜尋比向量搜尋更快

Answer: B

Hint: 「錯誤 ERR-4521」是精確匹配問題。「我如何修正登入問題？」是語意問題。

Explanation: 關鍵字（BM25）和語意搜尋有互補的優勢。BM25 擅長精確詞彙匹配（識別碼、代碼、名稱），而語意搜尋處理改述和概念相似度。混合搜尋使用兩者，通常用融合演算法（例如倒數排名融合）來組合結果。

Why others wrong: 混合不只是加倍結果，它改善覆蓋品質（A）；向量搜尋對語意查詢運作良好（C）；速度取決於實作（D）。

Trap: 只使用語意搜尋——它可能遺漏關鍵字搜尋能輕易找到的精確識別碼匹配。

Mnemonic: 精確詞彙 → 關鍵字。模糊意義 → 語意。真實查詢 → 兩者。

## Q66
Type: single
Difficulty: 1
Tags: nvidia-platform, nim-overview
Concepts: nvidia-nim-microservices
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

什麼是 NVIDIA NIM（NVIDIA Inference Microservices）？

A. 大型語言模型的訓練框架
B. 一組最佳化的容器化微服務，為 AI 模型提供 GPU 加速推論搭配標準 API 端點，實現基礎模型的簡易部署
C. 資料標註工具
D. 模型權重的雲端儲存服務

Answer: B

Hint: NIM 將推論打包成帶有最佳化效能的可部署容器。

Explanation: NVIDIA NIM 為基礎模型提供預最佳化的容器化推論微服務。每個 NIM 容器包含模型、TensorRT-LLM 最佳化和 API 端點，使得無需手動最佳化就能直接部署高效能 AI 推論。

Why others wrong: NIM 用於推論而非訓練（A）；NIM 服務模型而非標註資料（C）；NIM 是計算而非儲存（D）。

Trap: 將 NIM 和 NeMo 搞混——NeMo 用於訓練和自定義，NIM 用於最佳化推論部署。

Mnemonic: NIM = NVIDIA Inference Microservices。容器中的最佳化模型服務。

## Q67
Type: single
Difficulty: 2
Tags: nvidia-platform, nemo-guardrails
Concepts: nemo-guardrails-config
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

在 NVIDIA NeMo Guardrails 中，Colang（Conversational Language）的角色是什麼？

A. 取代 Python 的通用程式語言
B. 用於定義對話流程、安全規則和護欄邏輯的領域特定語言，控制 agent 如何回應各種輸入並防止有害輸出
C. 資料庫查詢語言
D. 網頁標記語言

Answer: B

Hint: Colang 定義「如果使用者說 X，則做 Y」——它是對話控制語言。

Explanation: Colang 是 NeMo Guardrails 的領域特定語言，用於宣告對話安全規則。它以人類可讀的格式定義流程（預期的對話模式）、行動（系統應該做什麼）和護欄（要阻擋或重定向什麼），不需要傳統程式設計。

Why others wrong: Colang 特定於 NeMo Guardrails 而非通用（A）；它用於對話而非資料庫（C）；它不用於網頁渲染（D）。

Trap: 以為護欄必須用 Python 實作——Colang 提供專為對話安全規則設計的更高層級抽象。

Mnemonic: Colang = 護欄的對話語言。定義規則而非程式碼。

## Q68
Type: single
Difficulty: 3
Tags: nvidia-platform, triton-inference
Concepts: triton-inference-server
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

一個 agentic 系統需要同時服務三個模型：用於推理的 LLM、用於 RAG 的重排序器和用於檢索的 embedding 模型。NVIDIA Triton Inference Server 如何幫助？

A. 它一次只能服務一個模型
B. Triton 可以同時託管多個模型、管理它們之間的 GPU 記憶體分配，並為每個模型獨立地動態批次處理請求——實現在共享 GPU 基礎設施上的高效多模型服務
C. 它將所有模型轉換為相同格式
D. 它加速模型訓練

Answer: B

Hint: Triton 就像多個模型在共享 GPU 上的交通管制員。

Explanation: Triton Inference Server 支援具有獨立批次處理、GPU 記憶體管理和模型版本控制的並行多模型服務。對於需要多個模型（LLM + 重排序器 + 嵌入器）的 agentic 管線，Triton 高效共享 GPU 資源同時維持每個模型的效能特性。

Why others wrong: Triton 明確支援多模型並行（A）；Triton 原生支援多框架（ONNX、TensorRT、PyTorch）而不需轉換（C）；Triton 用於推論而非訓練（D）。

Trap: 在各別 GPU 實例上執行每個模型——Triton 的多模型服務可以更有效率地共享 GPU。

Mnemonic: Triton = 多模型 GPU 交通管制員。多模型，共享 GPU，智慧排程。

## Q69
Type: single
Difficulty: 2
Tags: nvidia-platform, tensorrt-llm
Concepts: tensorrt-llm-optimization
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

TensorRT-LLM 應用於加速 NVIDIA GPU 上 LLM 推論的主要最佳化是什麼？

A. 它透過移除層來減少模型參數數量
B. 它將模型編譯為具有核心融合、量化支援和針對特定 GPU 架構量身打造的記憶體高效注意力實作的最佳化執行計畫
C. 它增加模型的訓練資料
D. 它將計算從 GPU 移到 CPU

Answer: B

Hint: TensorRT-LLM 不改變模型——它最佳化模型在 GPU 上的運行方式。

Explanation: TensorRT-LLM 應用 GPU 特定的最佳化：將多個操作融合為單一 GPU 核心（減少記憶體傳輸）、啟用各種量化等級（FP8、INT8、INT4），以及實作記憶體高效的注意力（FlashAttention、分頁注意力）。這些最佳化針對所使用的特定 GPU 架構進行編譯。

Why others wrong: 它不移除層或減少參數（A）；它用於推論最佳化而非訓練（C）；它保持計算在 GPU 上，這正是重點（D）。

Trap: 以為 TensorRT-LLM 改變模型——它最佳化特定 GPU 硬體上模型架構的執行計畫。

Mnemonic: TensorRT-LLM = LLM 推論的 GPU 最佳化編譯器。同樣的模型，更快的執行。

## Q70
Type: single
Difficulty: 2
Tags: nvidia-platform, nemo-retriever
Concepts: nemo-retriever-pipeline
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

在 agentic RAG 管線中 NVIDIA NeMo Retriever 的主要能力是什麼？

A. 它產生對使用者查詢的文字回應
B. 它提供帶有 GPU 加速向量搜尋的最佳化嵌入生成和檢索服務，包含文件攝取、分塊、嵌入和最近鄰檢索作為管理型管線
C. 它從頭訓練 LLM
D. 它建立資料視覺化儀表板

Answer: B

Hint: NeMo Retriever 處理 RAG 的「R」（Retrieval）部分，而非「G」（Generation）。

Explanation: NeMo Retriever 提供完整的 RAG 檢索管線：文件攝取、智慧分塊、GPU 加速的嵌入生成、向量索引和快速最近鄰搜尋。它與 NIM 整合用於推論，與 NeMo Guardrails 整合用於安全，形成完整的 NVIDIA RAG 堆疊。

Why others wrong: 文字生成由 LLM/NIM 處理而非 retriever（A）；NeMo Retriever 用於檢索而非訓練（C）；它不是視覺化工具（D）。

Trap: 將 NeMo Retriever 和 NeMo 框架搞混——NeMo Retriever 專門用於 RAG 檢索，而 NeMo 框架更廣泛（訓練、自定義）。

Mnemonic: NeMo Retriever = RAG 管線：攝取 → 分塊 → 嵌入 → 搜尋

## Q71
Type: single
Difficulty: 3
Tags: nvidia-platform, nim-deployment
Concepts: nim-production-deployment
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

為 agentic 應用部署 NIM 微服務時，哪個配置對生產可靠性最關鍵？

A. 將 GPU 溫度閾值設定為恰好 70°C
B. 配置健康檢查、資源限制（GPU 記憶體、CPU）、基於請求佇列深度的自動擴展策略，以及在終止前排空進行中請求的優雅關機程序
C. 將批次大小最大化到最大可能值
D. 停用日誌以改善效能

Answer: B

Hint: 生產可靠性需要服務是可觀測的、有界限的、可擴展的和可優雅關機的。

Explanation: 生產 NIM 部署需要：用於活性/就緒偵測的健康檢查；防止一個服務餓死其他服務的資源限制；處理需求的自動擴展；以及在滾動更新期間完成進行中請求的優雅關機。這些是標準的生產就緒要求。

Why others wrong: GPU 溫度由硬體管理而非應用配置（A）；最大批次大小可能導致記憶體不足錯誤（C）；日誌對除錯生產問題至關重要（D）。

Trap: 為了吞吐量最大化批次大小——大批次增加延遲並對可變長度輸入有記憶體不足的風險。

Mnemonic: 生產 NIM = 健康檢查 + 資源限制 + 自動擴展 + 優雅關機

## Q72
Type: single
Difficulty: 2
Tags: nvidia-platform, ai-enterprise
Concepts: nvidia-ai-enterprise
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

在部署 agentic 系統的脈絡中，什麼是 NVIDIA AI Enterprise？

A. 給愛好者的免費社群專案
B. 端到端軟體平台，提供企業級支援、安全修補、認證容器和最佳化執行環境，用於在生產環境中部署 AI（包括 NIM、NeMo 和 Triton）
C. 單一 GPU 模型
D. AI 研究人員的社群媒體平台

Answer: B

Hint: 企業 = 生產級、有支援、認證和安全。

Explanation: NVIDIA AI Enterprise 是商業軟體平台，將 NIM、NeMo、Triton 和相關工具與企業支援（SLA、安全修補、認證容器）捆綁在一起。它提供企業超越開源元件所需的生產就緒、受支援的堆疊。

Why others wrong: AI Enterprise 是商業產品而非免費專案（A）；它是軟體平台而非硬體（C）；它不是社群網路（D）。

Trap: 假設開源 NVIDIA 工具對企業生產就夠了——AI Enterprise 增加了受管制環境所需的支援、安全和認證。

Mnemonic: NVIDIA AI Enterprise = 帶支援和安全的生產級堆疊

## Q73
Type: single
Difficulty: 3
Tags: nvidia-platform, blueprint
Concepts: nvidia-agent-blueprints
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

NVIDIA 為常見的 agentic 模式提供 agent 藍圖（參考架構）。使用藍圖 vs 從頭建構的主要好處是什麼？

A. 藍圖是使用 NVIDIA 硬體的唯一方式
B. 藍圖提供經測試、最佳化的參考實作，帶有預配置的 NIM 服務、NeMo Guardrails 整合和部署腳本——減少上線時間並避免常見架構陷阱
C. 藍圖無法自定義
D. 藍圖是 NCP-AAI 認證所必需的

Answer: B

Hint: 藍圖就像建築師經過驗證的平面圖——你可以自定義它，但你從已知可行的東西開始。

Explanation: Agent 藍圖編碼了常見模式（RAG agent、多 agent 系統、使用工具的 agent）的最佳實踐和經測試的配置。它們包含預整合的 NVIDIA 元件、部署自動化和護欄——節省數週的整合工作並避免 NVIDIA 團隊已經解決的陷阱。

Why others wrong: 你可以不用藍圖使用 NVIDIA 硬體（A）；藍圖設計為可自定義的（C）；認證不要求使用藍圖（D）。

Trap: 為了「靈活性」而從頭建構所有東西——藍圖提供可自定義的經驗證起點，避免重新發明已解決的問題。

Mnemonic: 藍圖 = 經驗證的起點 + 可自定義。不要重新發明輪子。

## Q74
Type: single
Difficulty: 2
Tags: monitoring, agent-observability
Concepts: observability-stack
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

監控生產 agentic 系統需要哪三大可觀測性支柱？

A. 日誌（結構化事件記錄）、指標（隨時間的數值測量）和追蹤（跨 agent 和工具的端到端請求路徑追蹤）
B. 僅日誌就足夠
C. CPU 溫度、風扇轉速和功耗
D. 社群媒體提及、客戶評論和應用商店評分

Answer: A

Hint: 分散式系統的三大可觀測性支柱直接適用於 agentic 系統。

Explanation: 日誌提供詳細的事件記錄用於除錯；指標提供彙總測量用於警報和儀表板；追蹤顯示跨多個 agent 和工具的完整請求路徑。三者共同啟用個別故障的除錯（日誌）、趨勢偵測（指標）和系統行為理解（追蹤）。

Why others wrong: 僅日誌遺漏模式和跨 agent 流程（B）；硬體指標是基礎設施關注而非應用可觀測性（C）；外部回饋重要但不是可觀測性（D）。

Trap: 只實作日誌——沒有指標你會遺漏趨勢，沒有追蹤你無法跟蹤請求跨多個 agent。

Mnemonic: 三大支柱：日誌（發生了什麼）、指標（多少）、追蹤（旅程）

## Q75
Type: single
Difficulty: 3
Tags: monitoring, anomaly-detection
Concepts: agent-anomaly-detection
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

一個 agent 每個請求的平均工具呼叫次數在沒有程式碼變更的情況下從 3 突然增加到 12。最可能的原因是什麼，監控應如何偵測？

A. Agent 學會更徹底了——這總是正面的
B. 工具可靠性下降導致重試，或輸入分布變化觸發更複雜的推理路徑——監控應使用統計基線（例如平均值 + 3σ）對工具呼叫次數異常發出警報
C. 監控系統壞了
D. 使用者發送了更長的訊息

Answer: B

Hint: 沒有程式碼變更下工具呼叫增加 4 倍意味著環境有所改變。

Explanation: 沒有程式碼變更的突然行為變化表示環境轉變：不穩定的工具導致重試風暴、檢索品質下降導致額外搜尋，或輸入模式改變。統計異常偵測（Z 分數、移動平均）應標記偏離基線行為的顯著偏差。

Why others wrong: 增加的工具呼叫通常表示低效或故障而非改善（A）；監控系統報告了變化所以它正在工作（C）；訊息長度不會直接導致 4 倍的工具呼叫增加（D）。

Trap: 因為「agent 仍在產出正確輸出」就忽略增加的工具呼叫——潛在原因（通常是工具可靠性下降）會惡化。

Mnemonic: 突然行為變化 + 沒有程式碼變更 = 環境變化。監控基線，對異常發出警報。

## Q76
Type: single
Difficulty: 2
Tags: monitoring, cost-monitoring
Concepts: agentic-cost-control
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

一個 agentic 系統平均每天處理 5,000 個請求。偶爾，單一請求進入推理迴圈消耗 $50+ 的 LLM token。應實作什麼監控保障措施？

A. 移除所有工具以防止迴圈
B. 每請求 token 預算限制，超過時自動終止，結合接近限制的請求警報和已終止請求的分析以識別模式
C. 忽略異常成本因為很少發生
D. 將模型 temperature 降到零

Answer: B

Hint: 想想信用卡詐欺偵測——你設定消費限額並對異常模式發出警報。

Explanation: 每請求 token 預算防止無限迴圈或意外複雜推理鏈的失控成本。自動終止止住損失，而警報和分析啟用主動識別和修正導致昂貴請求的模式。

Why others wrong: 移除工具削弱 agent 的功能（A）；$50+ 的罕見異常值可以顯著累積（C）；temperature 影響隨機性而非迴圈行為（D）。

Trap: 預算設太低而終止合法的複雜請求——分析分布以設定適當的限制。

Mnemonic: 每請求預算 = 財務斷路器。設定限制，終止，警報，分析。

## Q77
Type: single
Difficulty: 2
Tags: monitoring, feedback-loops
Concepts: production-feedback-loop
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

使用者回饋（按讚/倒讚、修正）應如何整合到 agentic 系統的改進循環中？

A. 直接使用回饋即時修改 agent 的 system prompt
B. 系統性地收集回饋，分析以識別故障模式和改進機會，然後透過標準開發週期（prompt 更新、工具改進或微調）實施變更，並在部署前進行適當評估
C. 忽略負面回饋因為使用者不懂 AI
D. 對每個負面回饋實例自動微調模型

Answer: B

Hint: 回饋是訊號而非直接指令——需要分析後再行動。

Explanation: 使用者回饋有價值但有雜訊。系統性收集和分析揭示模式（哪些查詢類型最常失敗、哪些工具產出差劣結果）。基於彙總洞察的變更透過正常開發流程實施並經過評估以防止回歸。

Why others wrong: 基於個別回饋的即時 prompt 修改不穩定且可被利用（A）；負面回饋包含重要的改進訊號（C）；對個別實例自動微調導致災難性遺忘且不驗證改進（D）。

Trap: 根據個別回饋實例而非模式行動——一個使用者的「倒讚」可能是異常值，但 50 個類似查詢的倒讚是訊號。

Mnemonic: 回饋 → 彙總 → 分析模式 → 實施 → 評估 → 部署

## Q78
Type: single
Difficulty: 1
Tags: monitoring, health-checks
Concepts: service-health-monitoring
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

agent 服務的活性探測和就緒探測有什麼區別？

A. 它們是同一件事只是名稱不同
B. 活性探測檢查服務程序是否存活（如果死了就重啟），而就緒探測檢查服務是否可以接受新請求（如果未準備好就停止路由流量，例如在模型載入期間）
C. 活性檢查網路，就緒檢查磁碟
D. 生產中只需要就緒探測

Answer: B

Hint: 廚師可以是活著的（在廚房裡）但還沒準備好（還在準備食材）。

Explanation: 活性探測偵測需要重啟的當機或掛起程序。就緒探測偵測存活但暫時無法處理請求的服務（載入模型、預熱快取、排空連線）。Kubernetes 使用這些來獨立管理流量路由和容器生命週期。

Why others wrong: 它們服務不同目的（A）；兩者都檢查應用層級健康而非特定硬體（C）；兩者都需要——活性捕捉當機，就緒防止路由到未就緒的實例（D）。

Trap: 只實作活性檢查——沒有就緒探測，Kubernetes 會將流量路由到仍在載入模型的實例，導致錯誤。

Mnemonic: 活性 = 「你還活著嗎？」（沒有就重啟）。就緒 = 「你能工作嗎？」（不能就停止流量）。

## Q79
Type: single
Difficulty: 3
Tags: monitoring, incident-response
Concepts: agent-incident-management
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

在 agent 產出不正確財務計算的事件期間，正確的回應順序是什麼？

A. 先修正程式碼，然後調查根本原因
B. 立即緩解（停用財務計算工具或路由到更簡單的後備），向利害關係人溝通問題，使用追蹤和日誌調查根本原因，實施並驗證修正，然後帶監控部署
C. 忽略它因為錯誤率低於 5%
D. 重啟所有 agent 實例並希望它解決

Answer: B

Hint: 事件回應遵循：緩解 → 溝通 → 調查 → 修正 → 驗證 → 部署。

Explanation: 對於高影響事件，緩解先行以停止持續傷害（停用故障功能）。溝通讓利害關係人知情。使用可觀測性資料調查識別根本原因。修正在非生產環境中驗證後帶增強監控部署。

Why others wrong: 在緩解前修正允許修正期間持續傷害（A）；財務計算中任何錯誤率都不可接受（C）；盲目重啟不解決根本原因（D）。

Trap: 直接跳到程式碼修正——調查的每一分鐘都是另一分鐘不正確的財務計算到達使用者。

Mnemonic: MCIVD：緩解、溝通、調查、驗證、部署

## Q80
Type: multi
Difficulty: 2
Tags: monitoring, sla-metrics
Concepts: agent-sla-definition
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

agentic 系統的 SLA（服務層級協議）中哪兩個指標最重要？（選兩個）

A. P95 端到端回應時間——95% 的請求完成的延遲，考慮所有 agent 推理和工具呼叫
B. Agent 的程式碼行數
C. 任務成功率——達成預期結果的請求百分比，從使用者角度衡量 agent 的可靠性
D. 模型詞彙表的大小

Answer: A, C

Hint: SLA 應涵蓋使用者最關心的兩件事：速度和正確性。

Explanation: P95 延遲捕捉使用者對速度的體驗（包括最壞情況），而任務成功率捕捉 agent 是否真正完成工作。兩者共同涵蓋兩個基本使用者期望：回應應該及時且正確。

Why others wrong: 程式碼行數是開發指標而非 SLA 指標（B）；詞彙表大小是模型特性而非服務指標（D）。

Trap: 使用平均延遲而非 P95——平均值隱藏令使用者沮喪的異常值。第 95 百分位捕捉「慢請求」體驗。

Mnemonic: SLA = 速度（P95 延遲）+ 成功（任務完成率）

## Q81
Type: single
Difficulty: 2
Tags: monitoring, model-drift
Concepts: behavioral-drift-detection
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

在模型提供商更新其 LLM API（相同模型名稱，新版本）後，agent 的任務成功率下降了 8%。這應如何被偵測和預防？

A. 相信模型提供商始終維持向後相容性
B. 對黃金測試集實施持續評估，當指標降低到閾值以下時自動警報，並在可能時固定模型版本以控制更新時機
C. 如果使用者沒有抱怨就忽略下降
D. 切換到完全不同的模型提供商

Answer: B

Hint: 如果你沒有持續測試，你怎麼知道模型更新破壞了你的 agent？

Explanation: 對策劃的黃金測試集進行持續評估偵測任何原因的效能變化。固定模型版本防止提供商更新帶來的意外回歸。當偵測到更新（或有意應用時），黃金測試集在到達使用者前捕捉回歸。

Why others wrong: 模型提供商不保證跨版本的行為相容性（A）；8% 的下降即使使用者尚未抱怨也可能影響他們（C）；切換提供商有干擾性且不防止同樣的問題（D）。

Trap: 假設相同模型名稱 = 相同行為。模型更新經常改變影響下游 agent 的微妙行為。

Mnemonic: 固定版本 + 黃金測試集 = 在使用者之前偵測漂移

## Q82
Type: single
Difficulty: 2
Tags: monitoring, log-management
Concepts: structured-agent-logging
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

agent 工具呼叫的結構化日誌應包含什麼資訊？

A. 僅工具名稱
B. 工具名稱、輸入參數（敏感資料已遮蔽）、輸出摘要、執行持續時間、成功/失敗狀態、連結到父請求的追蹤 ID，以及 agent 選擇此工具的推理
C. 到該點為止的完整對話歷史
D. 僅錯誤，不包括成功的工具呼叫

Answer: B

Hint: 想想你需要什麼來除錯三天前出問題的工具呼叫。

Explanation: 全面的工具呼叫結構化日誌啟用除錯（發生了什麼？）、效能分析（花了多長時間？）、安全稽核（什麼資料？）和行為理解（為什麼選這個工具？）。敏感資料必須遮蔽，追蹤 ID 將工具呼叫連結到其父請求以進行端到端追蹤。

Why others wrong: 僅工具名稱不足以除錯（A）；完整對話太冗長且可能包含 PII（C）；成功呼叫提供偵測異常所需的基線資料（D）。

Trap: 僅記錄失敗——沒有成功呼叫的基線資料，你無法建立「正常」是什麼樣子或偵測退化趨勢。

Mnemonic: 工具日誌：誰呼叫了什麼，用了哪些輸入，花了多長時間，以及為什麼

## Q83
Type: single
Difficulty: 1
Tags: safety, jailbreak-defense
Concepts: prompt-injection-types
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

在 agentic 系統中，直接 prompt injection 和間接 prompt injection 有什麼區別？

A. 它們是同一種攻擊只是名稱不同
B. 直接注入是使用者製作惡意輸入來操縱 agent 行為，而間接注入是惡意指令嵌入在 agent 處理的外部資料來源（文件、網頁、工具輸出）中
C. 直接注入比間接注入更危險
D. 間接注入只影響聊天機器人而非 agent

Answer: B

Hint: 直接 = 使用者是攻擊者。間接 = 第三方在 agent 讀取的資料中植入攻擊。

Explanation: 直接 prompt injection 來自使用者的輸入。間接注入更隱蔽——它嵌入在 agent 檢索的資料中（網頁、知識庫中的文件、API 回應）。具有工具存取的 agent 特別脆弱因為它們攝取可能包含隱藏指令的外部資料。

Why others wrong: 它們是需要不同防禦的不同攻擊向量（A）；間接注入通常更危險因為更難偵測（C）；間接注入對檢索外部資料的 agent 特別相關（D）。

Trap: 只防禦直接注入——透過 RAG 檢索文件或工具輸出的間接注入是許多 agent 系統的主要盲點。

Mnemonic: 直接 = 使用者攻擊。間接 = 資料攻擊。Agent 讀取資料 → 易受間接攻擊。

## Q84
Type: single
Difficulty: 2
Tags: safety, data-isolation
Concepts: multi-tenant-safety
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

一個 agentic 系統以共享基礎設施服務多個租戶（組織）。最關鍵的安全要求是什麼？

A. 對所有租戶使用相同模型
B. 嚴格的資料隔離——確保一個租戶的資料、對話歷史和知識庫不能被服務另一個租戶的 agent 存取，透過認證、授權和每層的上下文隔離
C. 跨租戶均勻負載平衡
D. 為每個租戶使用不同的 UI 主題

Answer: B

Hint: 如果租戶 A 的商業機密出現在租戶 B 的 agent 回應中，後果是什麼？

Explanation: 多租戶資料隔離不可妥協。沒有嚴格隔離，跨租戶資料洩漏可能透過共享的 context window、快取的嵌入或不正確限定範圍的工具呼叫發生。每一層（LLM 上下文、RAG 檢索、工具執行）都必須強制執行租戶邊界。

Why others wrong: 如果資料隔離的話相同模型沒問題（A）；負載平衡是效能而非安全（C）；UI 主題是外觀（D）。

Trap: 假設模型層級隔離就足夠——資料洩漏可能透過共享的向量儲存、快取結果或不正確過濾的 RAG 檢索發生。

Mnemonic: 多租戶 = 每層都必須檢查：「這是誰的資料？」不能走捷徑。

## Q85
Type: single
Difficulty: 3
Tags: safety, output-safety
Concepts: safety-classification
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

一個 agent 產生了事實正確但如果被濫用可能造成傷害的回應（例如可能用於危險目的的正確化學資訊）。安全系統應如何處理？

A. 阻擋所有化學相關的回應
B. 應用情境安全評估——評估查詢意圖、使用者脈絡和造成傷害的可能性，以決定是提供資訊並附適當警告、提供更安全的替代方案，還是帶解釋拒絕
C. 總是提供資訊因為準確性至上
D. 不論脈絡都將回應替換為「我無法幫助」

Answer: B

Hint: 化學系學生問反應 vs 有人問如何製造危險物品——同樣的資訊，不同的脈絡。

Explanation: 情境安全避免過度阻擋（阻止合法使用）和不足阻擋（啟用傷害）。系統應評估特定請求脈絡、使用者歷史和潛在傷害途徑，然後選擇適當的回應策略而非套用一刀切規則。

Why others wrong: 一刀切主題阻擋阻止合法教育使用（A）；忽略傷害可能是不負責任的（C）；通用拒絕對合法查詢無用且令人沮喪（D）。

Trap: 二元思維（阻擋 vs 允許）——大多數安全決策是情境性的，需要對意圖和風險的細膩評估。

Mnemonic: 安全 = 情境感知而非類別式。評估意圖而非僅是主題。

## Q86
Type: single
Difficulty: 2
Tags: safety, audit-trail
Concepts: compliance-logging
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

對於金融服務 agent 的法規合規，稽核軌跡必須捕捉什麼？

A. 僅發送給使用者的最終回應
B. 完整的決策鏈：使用者輸入、agent 推理、所有工具呼叫及參數和結果、護欄評估和最終輸出——搭配防篡改儲存和符合法規要求的保留政策
C. 僅錯誤和故障
D. 每日活動摘要

Answer: B

Hint: 監管機構問「為什麼 agent 推薦這項投資？」——你能重建完整的決策路徑嗎？

Explanation: 金融法規要求重建完整的決策過程。稽核軌跡必須捕捉從輸入到輸出的每一步，包括內部推理和工具呼叫，以防篡改格式（僅追加、密碼學簽署）儲存並有適當的保留期限。

Why others wrong: 僅最終輸出不解釋決策是如何做出的（A）；合規要求記錄所有行動而非僅故障（C）；每日摘要缺乏調查所需的細粒度（D）。

Trap: 只記錄 I/O 而不記錄中間步驟——監管機構需要看到推理鏈而非僅是進出的內容。

Mnemonic: 合規稽核 = 每一步，防篡改，保留。「展示你如何決定的。」

## Q87
Type: multi
Difficulty: 3
Tags: safety, bias-mitigation
Concepts: agent-fairness
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

一個 HR 篩選 agent 顯示差異影響——它推薦男性候選人的比率高於具有類似資格的女性候選人。哪兩個步驟最重要來解決？（選兩個）

A. 從輸入資料中移除性別相關欄位，並稽核模型是否有與性別相關的代理變數（郵遞區號、愛好、大學名稱）
B. 忽略差異因為模型「只是客觀的」
C. 在評估管線中實施公平性指標（人口統計對等、均等化機率），搭配持續監控和差異影響的基於閾值的警報
D. 使用較小的模型以減少偏見

Answer: A, C

Hint: 移除明顯特徵不夠——代理變數可以編碼相同的偏見。持續監控才能發現它。

Explanation: 移除直接性別特徵是必要但不充分的，因為代理變數可以編碼相同的資訊。評估管線中的公平性指標定量偵測差異影響，而持續監控捕捉隨時間隨輸入分布變化而出現的新偏見。

Why others wrong: ML 偏見是系統性的，必須主動解決（B）；模型大小不決定偏見（D）。

Trap: 只移除性別欄位就假設偏見解決了——代理變數（大學聲望、課外活動）可能與受保護屬性高度相關。

Mnemonic: 移除 + 稽核代理 + 衡量公平性 + 持續監控 = 公平 agent

## Q88
Type: single
Difficulty: 2
Tags: safety, tool-permissions
Concepts: least-privilege-tools
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

一個 agent 有讀取和寫入資料庫的工具。Prompt injection 試圖讓 agent 刪除所有記錄。什麼架構保障措施能防止這個？

A. 依賴 LLM 識別並拒絕注入
B. 最小權限原則——agent 的資料庫憑證應只有所需的最小權限（例如 SELECT 和 INSERT，不包括 DELETE），所以即使 agent 被操縱也無法執行破壞性操作
C. 使用對注入更有抵抗力的更大模型
D. 在 system prompt 中加入「永不刪除資料」

Answer: B

Hint: 如果 agent 因為其資料庫使用者沒有 DELETE 權限而無法刪除，注入就不重要了。

Explanation: 基礎設施層級的最小權限提供縱深防禦：即使所有軟體保障措施（prompt、護欄）被複雜注入繞過，agent 在物理上無法執行破壞性操作因為其憑證不允許。這是最可靠的安全層。

Why others wrong: LLM 可被複雜注入欺騙（A）；更大模型也容易受到注入攻擊（C）；prompt 指令可被注入覆蓋（D）。

Trap: 僅依賴 prompt 層級護欄——它們可被繞過。基礎設施層級權限（最小權限）是最後一道防線。

Mnemonic: 最小權限 = agent 不能，而非不應該。權限 > prompt 的安全性。

## Q89
Type: single
Difficulty: 1
Tags: safety, content-moderation
Concepts: input-output-moderation
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

在 agentic 管線中哪些點應該套用內容審核？

A. 僅在使用者輸入
B. 在使用者輸入和 agent 輸出——輸入審核在處理前捕捉有害請求，輸出審核捕捉模型生成或從外部來源檢索的有害內容
C. 僅在 agent 輸出
D. Agent 不需要內容審核

Answer: B

Hint: 輸入 = 阻擋有害請求。輸出 = 阻擋有害回應。兩端都需要覆蓋。

Explanation: 輸入審核防止處理有害、非法或違反政策的請求。輸出審核捕捉 agent 可能生成、從外部來源檢索或從看似無害的片段構建的有害內容。兩者對全面安全都是必要的。

Why others wrong: 僅輸入審核遺漏從良性輸入生成的有害輸出（A）；僅輸出審核在處理有害請求上浪費資源（C）；具有工具存取和外部資料檢索的 agent 需要審核（D）。

Trap: 只審核輸入——檢索增強的 agent 可能從個別良性的檢索段落構建有害內容。

Mnemonic: 審核兩端：輸入（阻擋差請求）+ 輸出（阻擋差回應）

## Q90
Type: single
Difficulty: 2
Tags: safety, pii-protection
Concepts: pii-in-agent-pipelines
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

一個 agent 處理可能包含 PII（姓名、電子郵件、身分證號碼）的客戶支援工單。PII 在 agent 管線中應如何處理？

A. 將所有 PII 儲存在 agent 的日誌中用於除錯
B. 在 PII 進入 LLM 上下文前使用 PII 偵測模型偵測和遮蔽，日誌中只儲存遮蔽版本，僅在需要用於回應時在最終輸出階段應用 PII 重新識別
C. 忽略 PII 因為模型已在類似資料上訓練
D. 阻擋所有包含 PII 的工單

Answer: B

Hint: LLM 不需要看到「張三，身分證號碼 A123456789」就能解決帳務問題。

Explanation: Agent 管線中的 PII 最小化減少隱私風險和法律責任。PII 被偵測並在到達 LLM 前替換為 token（[姓名_1]、[電子郵件_1]），僅在最終輸出階段使用對照表進行重新識別。日誌只包含遮蔽的資料。

Why others wrong: 記錄 PII 違反隱私法規（A）；在類似資料上訓練不使 PII 曝露安全（C）；阻擋包含 PII 的工單會阻擋大多數真實客戶請求（D）。

Trap: 為了除錯記錄未遮蔽的資料——即使 agent 在回應中正確處理 PII，這也造成法律責任。

Mnemonic: PII 流程：偵測 → 遮蔽 → 處理 → 重新識別（僅在最終輸出需要時）

## Q91
Type: single
Difficulty: 3
Tags: safety, adversarial-robustness
Concepts: adversarial-testing
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

攻擊者發現在上傳到 agent 知識庫的文件中包含「忽略先前指令」可以劫持 agent 的行為。什麼縱深防禦策略能解決這個？

A. 掃描上傳文件中的精確短語「忽略先前指令」
B. 多層防禦：使用指令偵測分類器清理上傳內容、在 prompt 架構中分離資料和指令通道、使用 LLM 被訓練優先遵循的特權 system prompt，以及實施輸出護欄作為最後安全網
C. 完全停用文件上傳
D. 使用正規表達式過濾器篩選已知攻擊短語

Answer: B

Hint: 有決心的攻擊者會變化措辭——精確短語匹配會失敗。穩健的方法是什麼？

Explanation: 縱深防禦結合多層：內容清理捕捉明顯的注入嘗試、prompt 架構分離資料與指令（使注入更難利用）、system prompt 權限層級優先處理合法指令，以及輸出護欄捕捉任何滲透過的有害行為。

Why others wrong: 精確短語匹配透過改述就能輕易繞過（A）；停用上傳移除核心功能（C）；正規表達式透過 Unicode 技巧、拼寫錯誤或改述就能輕易繞過（D）。

Trap: 對已知攻擊字串進行模式匹配——攻擊者有無限變體（「忽略上述」、「新指令：」、Unicode 同形字）。需要基於分類器的偵測。

Mnemonic: 縱深防禦：清理輸入 + 分離通道 + 權限層級 + 護欄輸出

## Q92
Type: single
Difficulty: 2
Tags: safety, transparency
Concepts: ai-transparency
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

向使用者揭露他們正在與 AI agent 而非人類互動的主要目的是什麼？

A. 減少 agent 的工作量
B. 啟用知情同意並設定適當期望——使用者應知道他們正在與 AI 互動以便能校準信任、理解系統的局限性，並就分享敏感資訊做出知情決定
C. 因為每個司法管轄區都有法律要求
D. 使使用者不太可能使用服務

Answer: B

Hint: 你是否會根據對方是人類還是 AI 而不同地分享你的身分證號碼？

Explanation: AI 透明度啟用知情同意：使用者校準信任（不盲目信任 AI 醫療建議）、理解局限性（agent 可能幻覺），以及做隱私決定（與 AI 系統 vs 人類分享敏感資料）。雖然許多司法管轄區要求揭露，倫理原因是知情同意。

Why others wrong: 揭露不減少工作量（A）；並非所有司法管轄區都還強制要求揭露（C）；透明度建立信任而非迴避（D）。

Trap: 以為 AI 透明度會阻止使用——研究顯示當使用者理解 AI 有能力且局限性清晰時，透明度建立信任。

Mnemonic: 透明度 = 知情同意 + 校準信任 + 隱私意識

## Q93
Type: single
Difficulty: 1
Tags: human-ai, escalation
Concepts: human-escalation-design
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

agentic 系統何時應升級到人類操作員？

A. 永不——完全自主系統應處理所有事
B. 當 agent 信心低於閾值、任務涉及高風險決策（金融、醫療、法律）、agent 偵測到它在其訓練領域之外，或使用者明確請求人類協助
C. 在每個回應後都要人類審查
D. 僅在系統當機時

Answer: B

Hint: 想想不正確自主決策的成本——什麼時候成本太高？

Explanation: 人類升級平衡自動化效率和安全。低信心回應、高風險領域、領域外查詢和明確的使用者請求是標準升級觸發器。閾值應根據自主錯誤的成本 vs 人類介入的成本來校準。

Why others wrong: 對高風險決策完全自主是不適當的（A）；審查每個回應消除 AI 的效率優勢（C）；等待當機遺漏所有品質相關的升級需求（D）。

Trap: 將升級閾值設太高（「只在 agent 卡住時才打擾人類」）——對高風險決策，即使適度的不確定性也應觸發升級。

Mnemonic: 在以下情況升級：低信心、高風險、領域外，或使用者要求

## Q94
Type: single
Difficulty: 2
Tags: human-ai, feedback-design
Concepts: human-feedback-mechanisms
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

從 agentic 系統的使用者收集可行動回饋最有效的方式是什麼？

A. 單一的按讚/倒讚按鈕
B. 分層回饋——對所有回應的快速反應（按讚/倒讚），搭配可選的詳細回饋（什麼是錯的、預期什麼）捕捉特定的故障模式，在互動時收集
C. 每月滿意度調查
D. 監控社群媒體抱怨

Answer: B

Hint: 快速回饋告訴你什麼失敗了；詳細回饋告訴你為什麼。

Explanation: 分層回饋最大化收集率（低摩擦快速反應）和診斷價值（可選的詳細回饋用於故障分析）。在互動時收集回饋捕捉每月調查無法捕捉的特定脈絡。

Why others wrong: 僅按讚/倒讚缺乏診斷細節（A）；每月調查失去脈絡且回應率低（C）；社群媒體遺漏大多數使用者且到達太晚（D）。

Trap: 只收集二元回饋——它告訴你有事出錯但不告訴你什麼或為什麼，使改進困難。

Mnemonic: 快速 = 什麼出錯了。詳細 = 為什麼。在當下收集兩者。

## Q95
Type: single
Difficulty: 3
Tags: human-ai, calibrated-trust
Concepts: trust-calibration
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

一個 agentic 系統的使用者展現兩種有問題的信任模式：有些過度依賴 agent（不經驗證就接受不正確的財務建議），而其他人則信任不足（手動驗證每個正確的計算）。系統設計應如何解決兩者？

A. 移除所有信心指標讓使用者無法判斷 agent 的確定性
B. 提供校準的信心指標並展示 agent 的推理鏈——幫助過度信任的使用者識別需要驗證的不確定輸出，並幫助信任不足的使用者看到正確輸出背後的證據以建立適當信任
C. 讓 agent 永不表達不確定性
D. 加一個聲明 agent 總是錯的

Answer: B

Hint: 信任校準需要雙向資訊：使用者需要知道何時信任和何時驗證。

Explanation: 校準的信心指標幫助兩種信任極端：當信心低時向過度信任的使用者發出「驗證這個」的訊號，當信心高時向信任不足的使用者表示「這有良好支持」。展示推理使使用者能獨立評估輸出品質而非盲目信任或不信任。

Why others wrong: 移除信心資訊阻止信任校準（A）；隱藏不確定性導致過度依賴（C）；一刀切不信任聲明導致信任不足（D）。

Trap: 單向解決方案——增加聲明只減少過度信任同時惡化信任不足。好的設計在兩個方向校準信任。

Mnemonic: 信心 + 推理 = 校準信任。過度信任者檢查不確定性；信任不足者看證據。

## Q96
Type: single
Difficulty: 2
Tags: human-ai, progressive-autonomy
Concepts: autonomy-levels
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

一家公司正在部署用於發票處理的 agentic 系統。授予自主權的建議方法是什麼？

A. 從第一天起就完全自主以最大化 ROI
B. 漸進自主——從所有決策的人在迴圈中開始，隨著對系統信心增長逐步增加 agent 自主權，基於每個自主層級的測量準確率和監控效能
C. 永不給 agent 任何自主權
D. 讓每個使用者在沒有任何指導方針的情況下選擇自己的自主層級

Answer: B

Hint: 你如何建立對新員工的信任？從監督開始，逐漸增加獨立性。

Explanation: 漸進自主遵循贏得信任的原則。從完全人類監督開始啟用 agent 準確性和邊界案例處理的驗證。隨著指標證明可靠性，自主權逐步增加——從「建議並等待批准」到「行動並通知」到「對常規案例自主行動」。

Why others wrong: 沒有驗證的完全自主冒著規模化系統性錯誤的風險（A）；沒有自主權違背自動化的目的（C）；無指導的自主選擇導致不適當的信任層級（D）。

Trap: 急於完全自主以提高效率——發票處理中規模化的單一系統性錯誤可能比節省的時間成本高得多。

Mnemonic: 自主階梯：建議 → 行動並確認 → 行動並通知 → 完全自動。用資料攀升。

## Q97
Type: single
Difficulty: 2
Tags: human-ai, handoff-design
Concepts: agent-human-handoff
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

當 agent 將對話升級到人類操作員時，交接中必須包含什麼資訊？

A. 僅使用者的最新訊息
B. 結構化摘要包含：使用者的原始意圖、對話歷史、agent 嘗試了什麼、為什麼升級、任何相關的檢索文件或工具輸出，以及 agent 對情況的評估
C. Agent 的整個 system prompt
D. 僅錯誤訊息

Answer: B

Hint: 人類操作員應能無縫繼續，不需要使用者重複所有事。

Explanation: 有效的交接提供人類足夠的脈絡以繼續而不讓使用者重複。這包括嘗試了什麼（人類不重複失敗的方法）、為什麼升級（知道要專注什麼），以及相關資料（與 agent 擁有相同的資訊）。

Why others wrong: 最新訊息缺乏對話的脈絡（A）；system prompt 是內部實作細節（C）；錯誤訊息不捕捉使用者的需求或嘗試了什麼（D）。

Trap: 傾倒原始對話日誌——人類需要結構化摘要而非需要解析的原始逐字稿。

Mnemonic: 交接 = 摘要（什麼、為什麼、嘗試了什麼）+ 脈絡（歷史、資料）+ 評估

## Q98
Type: single
Difficulty: 1
Tags: human-ai, user-control
Concepts: user-agency
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

為什麼使用者始終能中斷或覆蓋 agent 的多步驟操作很重要？

A. 它使 agent 變慢從而改善品質
B. 使用者維持代理權和控制——他們可以停止朝錯誤方向進行的操作、在執行中修正路線，或取消他們未意圖的行動，防止 agent 完成可能有害或浪費的操作
C. 僅用於除錯
D. 中斷只應對管理員可用

Answer: B

Hint: 如果 agent 開始刪除你不想刪除的檔案，而你沒有停止按鈕會怎樣？

Explanation: 使用者控制是人機互動的基本原則。Agent 執行可能花費數分鐘且涉及不可逆行動的多步驟操作。沒有中斷能力，如果 agent 誤解使用者意圖或遇到邊界案例，使用者就是無力的旁觀者。

Why others wrong: 中斷不是關於速度（A）；所有使用者都需要控制而非僅開發者（C）；所有使用者都應有此能力而非僅管理員（D）。

Trap: 假設中斷很少需要因為 agent「通常是對的」——罕見錯誤案例的後果可能嚴重。

Mnemonic: 使用者控制 = 始終可用的停止按鈕。代理權而非旁觀。

## Q99
Type: single
Difficulty: 3
Tags: human-ai, collaborative-design
Concepts: human-agent-collaboration
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

在協作文件編輯 agent 中，agent 建議編輯而人類接受、拒絕或修改它們。系統應如何從人類的修改模式中學習？

A. 自動將人類的修改應用到所有未來文件
B. 追蹤修改模式以識別系統性偏好差異（例如人類總是將被動語態改為主動語態，或偏好較短的句子），然後將驗證過的模式納入 agent 偏好同時維持人類覆蓋的能力——建立一個改進而不失去人類控制的適應性系統
C. 忽略修改因為 agent 的原始建議是最佳的
D. 移除協作功能讓 agent 獨立工作

Answer: B

Hint: 每次修改是關於人類偏好的訊號——你如何將訊號轉化為學習而不失去控制？

Explanation: 基於模式的修改學習建立良性改進循環。驗證過的模式（跨多個實例確認）成為 agent 偏好，減少未來的修改需求。人類保留覆蓋能力，確保 agent 永不鎖定在不正確的學習偏好中。

Why others wrong: 盲目應用修改可能是脈絡特定的而非通用偏好（A）；忽略回饋遺漏有價值的學習訊號（C）；移除協作失去人類的領域專業知識（D）。

Trap: 從個別修改過度學習——單次編輯可能是脈絡特定的而非通用偏好。跨多個實例的模式驗證防止過擬合。

Mnemonic: 修改 → 模式 → 驗證偏好 → 適應性 agent。人類始終覆蓋。

## Q100
Type: multi
Difficulty: 2
Tags: human-ai, accessibility
Concepts: inclusive-agent-design
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

哪兩個設計原則確保 agentic 系統對不同能力的使用者是無障礙的？（選兩個）

A. 多種互動模態——支援文字、語音和視覺介面讓使用者透過偏好或需要的通道互動
B. 只使用小字型以在螢幕上放更多資訊
C. 清晰、無行話的溝通搭配可調冗長度——允許使用者根據理解需求和偏好在簡潔和詳細回應之間選擇
D. 要求所有使用者在使用系統前通過技術評估

Answer: A, C

Hint: 無障礙意味著系統對每個人都有效——你如何適應不同需求？

Explanation: 多種模態適應身體無障礙需求（視覺、聽覺、運動障礙），而可調冗長度適應認知無障礙需求（專業水平、語言能力、處理偏好）。兩者共同確保 agent 可被多樣化的使用者群體使用。

Why others wrong: 小字型降低可讀性和無障礙性（B）；技術門檻排除最需要系統的使用者（D）。

Trap: 只為「平均使用者」設計——無障礙設計透過靈活性和清晰度惠及每個人。

Mnemonic: 無障礙 agent = 多通道 + 可調細節。每個人的溝通方式不同。

## Q101
Type: single
Difficulty: 2
Tags: human-ai, explanation-design
Concepts: agent-explainability
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

當 agent 推薦一個複雜行動（例如重構資料庫 schema）時，什麼層級的解釋對人類決策者最有幫助？

A. 不解釋——直接執行行動
B. 分層解釋：什麼和為什麼的一句話摘要，接著可展開的細節展示 agent 的推理、來自程式碼庫的證據、考慮的替代方案和潛在風險——同時啟用快速評估和深度評估
C. 每個推薦都寫 10 頁技術報告
D. 僅展示要執行的 SQL 命令

Answer: B

Hint: 忙碌的工程師需要快速掌握要點，但在推薦看起來有問題時應能深入細節。

Explanation: 分層解釋尊重人類的時間（常規決策的快速摘要），同時在需要時啟用深度評估（複雜或不確定決策的可展開細節）。這匹配人類實際消費資訊的方式——先掃描，選擇性地深入。

Why others wrong: 不解釋阻止知情決策（A）；每個推薦 10 頁報告造成警報疲勞（C）；僅 SQL 不解釋為什麼或考慮了哪些替代方案（D）。

Trap: 過度解釋每個推薦——人類會產生「解釋疲勞」並停止閱讀，這比不解釋更糟。

Mnemonic: 分層它：摘要用於掃描，細節用於深入。尊重人類的時間。

## Q102
Type: single
Difficulty: 3
Tags: human-ai, autonomous-boundaries
Concepts: autonomy-boundaries
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

一個管理雲端基礎設施的 agent 偵測到一個潛在的成本最佳化，透過調整實例大小每月可節省 $5,000，但有 2% 的暫時服務退化風險。Agent 應該自主行動嗎？

A. 是——成本節省明顯超過風險
B. 否——agent 應呈現其分析的最佳化機會（節省、風險、受影響服務、回滾計畫），並請求人類批准因為行動有生產影響且無法即時輕鬆逆轉
C. 是，但僅在營業時間
D. 否——agent 不應該建議成本最佳化

Answer: B

Hint: 你想要一個自動化系統不問你就調整你的生產資料庫嗎？

Explanation: 有潛在服務影響的生產基礎設施變更應需要人類批准，不論預期收益。Agent 透過偵測機會和準備分析增加價值，但接受風險的決定屬於理解業務脈絡的人類（例如即將到來的發布、SLA 承諾）。

Why others wrong: 成本節省不覆蓋對生產風險人類判斷的需要（A）；營業時間不改變風險概況（C）；偵測機會是有價值的即使行動需要批准（D）。

Trap: 給 agent 對基礎設施的全面自主——產品發布期間 2% 的退化風險可能是災難性的，而安靜期間同樣的風險可能是可接受的。

Mnemonic: 生產影響 + 風險 = 人類決定。Agent 的工作：偵測、分析、推薦。人類的工作：批准。

## Q103
Type: single
Difficulty: 2
Tags: agent-development, function-calling
Concepts: parallel-function-calls
Domain: Domain 2 — Agent Development
DomainNumber: 2

一個 agent 需要同時擷取天氣資料、股價和新聞標題以組成早間簡報。應應用什麼工具呼叫最佳化？

A. 循序呼叫每個工具，等待每個完成後再開始下一個
B. 對所有三個獨立資料來源同時發出平行 function call，將總延遲從個別呼叫時間的總和降低到最大單一呼叫時間
C. 只擷取使用者最近問到的資料
D. 快取昨天的資料並當作今天的呈現

Answer: B

Hint: 這三個資料來源互不依賴——為什麼要等一個完成後才開始下一個？

Explanation: 當工具呼叫是獨立的（它們之間沒有資料依賴），平行執行將總延遲從循序（T1 + T2 + T3）降低到並行（max(T1, T2, T3)）。大多數現代 agent 框架支援對獨立工具的平行 function calling。

Why others wrong: 循序執行在獨立呼叫上浪費時間（A）；省略資料來源提供不完整的簡報（C）；過時資料違背早間簡報的目的（D）。

Trap: 預設使用循序工具呼叫——許多開發者即使工具之間沒有資料依賴也將工具寫成循序管線。

Mnemonic: 獨立工具？平行呼叫它們。延遲 = max（所有呼叫），而非總和。

## Q104
Type: single
Difficulty: 3
Tags: agent-development, error-classification
Concepts: error-taxonomy
Domain: Domain 2 — Agent Development
DomainNumber: 2

一個 agent 的錯誤日誌顯示：40% 工具超時錯誤、30% 格式錯誤的工具輸入錯誤、20% 不正確的工具選擇錯誤，和 10% 幻覺工具名稱錯誤。哪個錯誤類別應優先修正？

A. 幻覺工具名稱因為最不尋常
B. 工具超時錯誤因為最頻繁——但調查後，格式錯誤的輸入錯誤可能應被優先處理因為它們表明系統性的 prompt 或 schema 問題，一旦修正可能也減少不正確選擇和幻覺
C. 所有類別同等
D. 都不需要——100% 的請求最終在重試後成功

Answer: B

Hint: 哪種錯誤類型最可能是導致其他錯誤類型的根本原因？

Explanation: 格式錯誤的輸入暗示 agent 不正確理解工具 schema——一個可能級聯成不正確工具選擇（因誤解參數而選錯工具）甚至幻覺名稱（當現有工具看起來不相容時發明工具）的根本問題。修正 schema 理解解決多個錯誤類別。

Why others wrong: 幻覺名稱是症狀，通常是更深層工具理解問題的結果（A）；同等優先級不聚焦根本原因（C）；重試掩蓋問題並浪費資源（D）。

Trap: 只修正最頻繁的錯誤——根本原因分析經常揭示第二或第三常見的錯誤在上游並導致多個下游錯誤。

Mnemonic: 找到導致級聯錯誤的根本原因。頻率 ≠ 優先級。

## Q105
Type: single
Difficulty: 2
Tags: evaluation, ab-testing
Concepts: agent-ab-testing
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

A/B 測試 agent 的兩個版本（例如不同 prompt）時，必須避免什麼統計陷阱？

A. 測試太長
B. 在達到統計顯著性之前偷看結果並做出過早決定，或在不控制混淆變數如時間效應對查詢複雜度影響的情況下執行測試
C. 有太多測試使用者
D. 使用與生產相同的指標

Answer: B

Hint: 每天檢查結果並「看起來好就停止」會使統計測試無效。

Explanation: 過早偷看會膨脹假陽性率因為沒有修正的多重比較增加偶然看到顯著性的機會。混淆變數（時間、使用者群體、查詢類型）可能使一個變體看起來更好但差異是由於群體而非 prompt。

Why others wrong: 更長的測試減少雜訊（A）；更多使用者增加統計力量（C）；使用生產指標確保測試衡量重要的東西（D）。

Trap: 因為變體 B「一天後看起來好 5%」就提前停止 A/B 測試——效果可能是隨更多資料消失的雜訊。

Mnemonic: A/B 測試：不要偷看，達到顯著性，控制混淆。耐心 = 有效結果。

## Q106
Type: single
Difficulty: 2
Tags: evaluation, dataset-contamination
Concepts: eval-dataset-integrity
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

為什麼 agent 的評估資料集必須與訓練和 prompt 開發資料仔細隔離？

A. 為了節省儲存空間
B. 被污染的評估資料集給出虛假樂觀的結果——如果 agent 在用於評估的相同範例上被最佳化，分數反映記憶而非泛化，使評估對預測真實世界效能毫無意義
C. 因為不同團隊應管理不同資料集
D. 為了符合資料格式標準

Answer: B

Hint: 用學生練習過的相同題目測試他們不衡量理解。

Explanation: 資料污染膨脹評估指標而不改善真實世界效能。如果 prompt engineering 使用了與評估相同的範例，agent 在已知案例上看起來表現好但可能在新查詢上失敗。乾淨的評估需要 agent 在開發期間從未「見過」的保留資料。

Why others wrong: 儲存不是關注點（A）；組織分離有幫助但不是主要原因（C）；格式標準無關（D）。

Trap: 對 prompt 開發和評估使用「代表性」範例——它們在影響 prompt 的那一刻就被污染了。

Mnemonic: 評估 = 考試。開發資料 = 練習題。永遠不能是同一套。

## Q107
Type: single
Difficulty: 3
Tags: deployment, rate-limiting
Concepts: rate-limiting-strategies
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

一個 agentic 系統必須強制速率限制以防止濫用，但不同請求類型有非常不同的成本（簡單的 FAQ 查詢 vs 多工具研究任務）。什麼速率限制策略最適合？

A. 所有請求類型每分鐘固定 N 個請求的速率限制
B. 帶成本加權 token 的 token 桶速率限制——簡單請求消耗 1 個 token 而複雜多工具請求按比例消耗更多，搭配每使用者和每組織桶以及超限時的優雅降級
C. 因為使用者已認證所以不需要速率限制
D. 在任何失敗請求後封鎖使用者

Answer: B

Hint: 簡單的「每分鐘 10 個請求」限制將 100ms 查詢和 30 秒研究任務同等對待——這公平嗎？

Explanation: 成本加權速率限制透過對昂貴操作收取「更多」確保公平的資源分配。一個使用者做 100 個簡單查詢和一個使用者做 10 個複雜研究任務可能消耗類似資源，所以它們應面對類似的資源消耗速率限制而非請求計數。

Why others wrong: 固定速率限制不公平——要麼過度限制簡單查詢要麼不足限制複雜查詢（A）；已認證使用者仍可濫用資源（C）；在失敗時封鎖太激進（D）。

Trap: 僅使用請求計數作為速率限制維度——單一複雜 agentic 請求可消耗簡單請求 100 倍的資源。

Mnemonic: 按成本限制而非計數。複雜請求 = 從桶中取更多 token。

## Q108
Type: single
Difficulty: 2
Tags: cognition, task-decomposition
Concepts: hierarchical-task-decomposition
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

一個 agent 收到請求：「研究競爭者、分析他們的定價，並建立一份比較報告。」任務分解應如何設計？

A. 在單一 LLM 呼叫中嘗試所有事
B. 階層式分解：拆分為子任務（1. 識別競爭者 → 2. 收集每個的定價資料 → 3. 分析定價模式 → 4. 產生比較報告），每個子任務產出結構化輸出供下一個使用
C. 直接跳到建立報告
D. 請使用者手動拆分為子任務

Answer: B

Hint: 複雜任務需要拆分為有明確輸入和輸出的可管理步驟。

Explanation: 階層式分解將複雜任務拆分為更簡單的子任務序列，每個有明確的輸入、輸出和成功標準。這使 agent 能在每步使用適當的工具、驗證中間結果，並從故障中恢復而不需重啟整個任務。

Why others wrong: 單一呼叫無法處理多步驟研究（A）；跳到報告缺乏研究基礎（C）；使用者不應需要做 agent 的規劃工作（D）。

Trap: 分解太細粒度——每個子任務應是有意義的工作單元而非個別 API 呼叫。

Mnemonic: 複雜請求 → 有明確 I/O 的子任務 → 結構化管線

## Q109
Type: single
Difficulty: 2
Tags: knowledge-integration, citation
Concepts: source-attribution
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

為什麼基於 RAG 的 agent 應在其回應中包含來源引用？

A. 為了增加回應長度
B. 引用使使用者能透過檢查原始來源來驗證 agent 的主張、透過透明度建立信任，並幫助識別檢索到的資訊何時過時或來自不可靠的來源
C. 因為所有 LLM 在其輸出格式中都要求引用
D. 為了避免版權主張

Answer: B

Hint: 「信任但驗證」——如果使用者不知道資訊來自哪裡，他們如何驗證？

Explanation: 來源引用服務三個關鍵功能：可驗證性（使用者可以檢查主張）、信任（關於資訊來源的透明度）和品質訊號（使用者可以評估來源可靠性和新近度）。在企業環境中，引用通常是合規和稽核軌跡所需的。

Why others wrong: 長度不是目標（A）；LLM 不固有要求引用（C）；版權是另一個問題（D）。

Trap: 包含引用而不驗證它們是否實際支持主張——幻覺引用（看起來真實但虛假的參考資料）比沒有引用更糟。

Mnemonic: 引用 = 驗證 + 信任 + 品質。展示你的來源，讓使用者檢查。

## Q110
Type: single
Difficulty: 3
Tags: nvidia-platform, nim-customization
Concepts: nim-model-customization
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

一家企業想要使用 NVIDIA NIM 部署領域特定的 agent。基礎模型表現良好但在行業特定術語上犯錯。建議的 NVIDIA 工作流程是什麼？

A. 從頭訓練新模型
B. 使用 NeMo 框架對領域特定資料微調或應用 LoRA 適配器到基礎模型，然後將自定義模型匯出為帶 TensorRT-LLM 最佳化的 NIM 微服務用於生產部署
C. 手動編輯模型權重
D. 僅使用 prompt engineering，永不微調

Answer: B

Hint: NeMo 用於自定義，NIM 用於部署——它們是互補的。

Explanation: NVIDIA 從自定義到部署的工作流程：(1) NeMo 用於參數高效微調（LoRA、P-tuning）在領域資料上，(2) 匯出帶 TensorRT-LLM 最佳化的自定義模型，(3) 部署為 NIM 容器。這提供領域準確性搭配生產級推論效能。

Why others wrong: 當基礎模型大部分正確時從頭訓練是浪費（A）；手動權重編輯對現代模型不可行（C）；prompt engineering 單獨可能無法解決系統性術語錯誤（D）。

Trap: 微調但沒有 TensorRT-LLM 最佳化——自定義模型可能準確但對生產延遲要求太慢。

Mnemonic: NeMo 自定義 → TensorRT-LLM 最佳化 → NIM 部署。NVIDIA 管線。

## Q111
Type: single
Difficulty: 2
Tags: monitoring, alerting
Concepts: alert-design
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

什麼是「警報疲勞」，它如何影響 agentic 系統的營運？

A. 看儀表板的身體疲勞
B. 當太多非可行動警報觸發時，操作員開始忽略它們——包括關鍵警報——因為訊噪比太低，導致錯過事件和退化的回應時間
C. 當警報系統耗盡記憶體
D. 當使用者收到太多 agent 回應

Answer: B

Hint: 狼來了的男孩——當每個小問題都觸發緊急警報時會發生什麼？

Explanation: 警報疲勞發生在操作員被非關鍵警報淹沒導致他們錯過或忽略真正關鍵的警報。在 agentic 系統中，這意味著生產事件（agent 迴圈、資料洩漏、成本飆升）可能無人處理因為團隊已被持續的低優先級警報鈍化。

Why others wrong: 警報疲勞是心理的而非身體的（A）；它是人的問題而非系統資源問題（C）；它是關於操作員警報而非使用者回應（D）。

Trap: 設定激進的警報閾值「以求安全」——太多警報和太少一樣危險因為關鍵警報在雜訊中丟失。

Mnemonic: 太多警報 → 所有警報被忽略 → 關鍵事件被錯過。調整訊號而非雜訊。

## Q112
Type: single
Difficulty: 2
Tags: safety, responsible-ai
Concepts: responsible-ai-principles
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

當 agent 在未告知使用者其局限性的情況下被部署時，哪個負責任 AI 原則最直接被違反？

A. 可擴展性
B. 透明度——如果使用者不知道 agent 可能出錯、有偏見或領域外失敗，他們無法做出關於信任 agent 輸出的知情決定
C. 效能最佳化
D. 成本效率

Answer: B

Hint: 如果使用者不知道 agent 能做什麼和不能做什麼，他們能適當地信任嗎？

Explanation: 負責任 AI 中的透明度要求使用者理解系統的能力、局限性和潛在故障模式。沒有這些資訊，使用者可能在 agent 不可靠的任務上過度信任，或在它表現出色的任務上信任不足。

Why others wrong: 可擴展性是技術關注而非倫理原則（A）；效能是工程目標（C）；成本效率是商業指標（D）。

Trap: 以為透明度意味著展示模型的權重或內部架構——它意味著以使用者可理解的術語溝通能力、局限性和信心。

Mnemonic: 透明度 = 使用者知道 agent 能做什麼和不能做什麼。知情信任。

## Q113
Type: single
Difficulty: 3
Tags: agent-architecture, versioning
Concepts: agent-version-management
Domain: Domain 1 — Agent Architecture and Design
DomainNumber: 1

一個多 agent 系統有 5 個具有相互依賴行為的 agent。當 Agent C 被更新時，它改變了 Agent D 和 E 消費的輸出格式。版本管理應如何設計？

A. 同時更新所有 agent 並希望一切順利
B. 對 agent 介面使用語意版本控制，向後相容的變更作為次要版本，破壞性變更作為主要版本，在 agent 間通訊邊界強制版本相容性檢查，並支援在遷移期間同時執行多個版本
C. 部署後永不更新任何 agent
D. 讓每個 agent 團隊獨立管理他們的版本而不協調

Answer: B

Hint: 這與微服務 API 版本控制是同樣的問題——你如何處理破壞性介面變更？

Explanation: Agent 介面的語意版本控制實現受控演進：次要更新是向後相容的，主要更新標示破壞性變更。通訊邊界的版本檢查防止不相容的 agent 互動。在遷移期間同時執行多個版本實現漸進遷移而非一次性部署。

Why others wrong: 同時更新有風險且在規模上通常不可能（A）；永不更新阻止改進（C）；不協調的版本控制導致不相容（D）。

Trap: 不將 agent 介面當作版本化 API 對待——當 Agent C 改變輸出格式時，Agent D 和 E 靜默地壞掉。

Mnemonic: Agent 介面 = API。版本化它們，檢查相容性，漸進遷移。

## Q114
Type: single
Difficulty: 2
Tags: agent-development, guardrails-testing
Concepts: guardrail-eval
Domain: Domain 2 — Agent Development
DomainNumber: 2

應如何測試護欄以確保它們正確運作而不過度阻擋合法請求？

A. 部署護欄並等待使用者關於被阻擋請求的抱怨
B. 使用綜合套件測試，包含對抗性攻擊（應被阻擋）、合法邊界案例（不應被阻擋）和模糊案例（應被正確分類），衡量假陽性率（過度阻擋）和假陰性率（阻擋不足）
C. 僅用對抗性攻擊測試以確保它們被阻擋
D. 在測試期間停用護欄

Answer: B

Hint: 護欄必須阻擋應阻擋的且允許應允許的。測試兩個方向。

Explanation: 有效的護欄測試需要平衡評估：對抗性測試驗證阻擋能力，合法邊界案例測試驗證護欄不過度阻擋，模糊案例驗證正確分類。假陽性率（阻擋合法請求）與假陰性率（遺漏攻擊）同樣重要。

Why others wrong: 使用者抱怨太晚且成本高（A）；僅測試攻擊遺漏過度阻擋（C）；不帶護欄測試毫無意義（D）。

Trap: 僅測試對抗性攻擊並慶祝 100% 阻擋率——如果護欄也阻擋 20% 的合法請求，它們就不可用。

Mnemonic: 護欄測試 = 攻擊被阻擋？+ 合法被允許？+ 模糊正確？平衡兩種錯誤類型。

## Q115
Type: single
Difficulty: 3
Tags: evaluation, statistical-significance
Concepts: eval-methodology
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

評估顯示 Agent A 在 200 個測試案例上有 82% 準確率，Agent B 有 84% 準確率。你能結論 Agent B 更好嗎？

A. 是——84% 明顯高於 82%
B. 不一定——在 200 個測試案例中，2% 的差異（4 道題）可能在統計誤差範圍內。需要信賴區間計算或顯著性測試來確定差異是否具有統計意義
C. 否——Agent A 總是更好因為它先被測試
D. 是，但僅在 Agent B 是較新的情況下

Answer: B

Hint: 如果你拋 200 次硬幣，你不會期望每次都恰好 100 次正面。多少變異是「正常的」？

Explanation: 200 個樣本上 2% 的差異意味著約 4 道題。用二項信賴區間，200 個樣本上 82% 準確率的 95% CI 約為 ±5.3%，84% 約為 ±5.1%。區間大幅重疊，所以差異不具統計顯著性——你不能結論 B 更好。

Why others wrong: 沒有統計測試的原始百分比比較有誤導性（A）；測試順序無關（C）；模型年齡與統計比較無關（D）。

Trap: 將小的準確率差異視為有意義而不進行顯著性測試——這導致「隨機遊走」最佳化，保留兩個等效選項中雜訊更大的那個。

Mnemonic: 小差異 + 小樣本 = 雜訊而非訊號。總是檢查顯著性。

## Q116
Type: single
Difficulty: 2
Tags: deployment, graceful-degradation
Concepts: degraded-mode-operation
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

當主要 LLM 服務不可用時，agentic 系統應如何優雅降級？

A. 顯示空白頁面
B. 後備到本地託管的較小模型處理基本查詢，對常見問題呈現快取回應，清楚向使用者溝通降低的功能，並佇列複雜請求在主服務恢復時處理
C. 當機並等待服務回來
D. 不經測試就切換到隨機替代提供商

Answer: B

Hint: 航空公司在電腦系統當機時仍然處理客戶——他們切換到手動流程搭配降低的服務。

Explanation: 優雅降級維持部分功能：本地模型處理簡單查詢、快取回應覆蓋常見案例，複雜查詢被佇列。清楚溝通設定使用者期望。這遠勝於完全中斷並維持使用者信任。

Why others wrong: 空白頁面是完全故障（A）；當機不提供任何價值（C）；未經測試的提供商可能產出不相容或不正確的結果（D）。

Trap: 沒有後備計畫——「我們的 LLM 提供商永不當機」不是彈性策略。

Mnemonic: 主服務當了？優雅降級：較小模型 + 快取 + 佇列 + 溝通。

## Q117
Type: single
Difficulty: 2
Tags: cognition, goal-decomposition
Concepts: goal-oriented-planning
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

在目標導向的 agent 規劃中，前向鏈結和後向鏈結有什麼區別？

A. 它們總是產出相同的計畫
B. 前向鏈結從當前狀態出發朝目標工作，而後向鏈結從目標出發往回工作以識別必須滿足的條件——後向鏈結對明確定義的目標通常更有效率
C. 前向鏈結用於簡單任務，後向鏈結用於複雜任務
D. 它們指的是工具執行的順序

Answer: B

Hint: 蓋房子：前向 = 「我有地，第一步是什麼？」vs 後向 = 「我需要一棟房子，完成前的最後一步是什麼？」

Explanation: 前向鏈結從當前狀態探索行動，可能導致不必要的探索。後向鏈結從目標出發並識別所需的先決條件，早期修剪不相關的行動。對於有明確定義目標的 agent，後向鏈結產出更聚焦的計畫。

Why others wrong: 它們可以以不同效率產出不同計畫（A）；兩者都能處理任何複雜度（C）；它們是關於規劃方向而非執行順序（D）。

Trap: 總是使用前向鏈結因為更直覺——對目標導向任務，後向鏈結避免在不貢獻於目標的行動上浪費精力。

Mnemonic: 前向 = 從現在探索。後向 = 從目標往回。目標明確？走後向。

## Q118
Type: single
Difficulty: 2
Tags: knowledge-integration, vector-db-selection
Concepts: vector-database-criteria
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

為 agentic RAG 系統選擇向量資料庫時，生產使用最重要的能力是什麼？

A. 支援最大可能的維度數量
B. 帶過濾支援的高效近似最近鄰（ANN）搜尋、水平可擴展性、即時索引更新，以及高可用性、備份和存取控制等生產功能
C. 最漂亮的管理員儀表板
D. 僅支援 SQL 查詢

Answer: B

Hint: 生產 = 擴展 + 可用性 + 即時更新 + 安全。不僅是快速搜尋。

Explanation: 生產向量資料庫需要：帶中繼資料過濾的快速 ANN 搜尋（混合搜尋）、為增長資料的水平擴展、即時更新（非僅批次），以及營運功能（高可用、備份、角色型存取控制）。沒有這些的純搜尋速度對企業 agentic 系統不夠。

Why others wrong: 維度計數很少是瓶頸（A）；儀表板很好但不是關鍵（C）；僅 SQL 資料庫不原生支援向量操作（D）。

Trap: 僅基於基準搜尋速度選擇——生產需求還包括更新延遲、過濾、可擴展性和營運功能。

Mnemonic: 生產向量 DB = 快速搜尋 + 過濾 + 擴展 + 高可用 + 更新 + 安全

## Q119
Type: single
Difficulty: 3
Tags: nvidia-platform, multi-gpu
Concepts: multi-gpu-inference
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

使用 NVIDIA 堆疊跨多個 GPU 部署大型模型時，tensor parallelism 和 pipeline parallelism 有什麼區別？

A. 它們是同一種技術
B. Tensor parallelism 將個別層分割到多個 GPU（每個 GPU 計算每層的一部分），而 pipeline parallelism 將不同層分配給不同 GPU（每個 GPU 處理完整層但是模型的不同階段）
C. Tensor parallelism 僅用於訓練
D. Pipeline parallelism 總是更快

Answer: B

Hint: 想像流水線（pipeline）vs 團隊同時在同一部分工作（tensor）。

Explanation: Tensor parallelism 將每層內的計算分佈到多個 GPU，需要高頻寬互連（NVLink）。Pipeline parallelism 將不同模型層分配給不同 GPU，建立微批次流經階段的管線。Tensor parallelism 減少每層延遲；pipeline parallelism 減少每 GPU 記憶體。

Why others wrong: 它們解決多 GPU 分佈的不同面向（A）；兩者都用於推論（C）；速度取決於模型、硬體和通訊頻寬（D）。

Trap: 在 tensor parallelism 更好時使用 pipeline parallelism（或反之）——GPU 互連頻寬高（NVLink）時偏好 tensor parallelism，低（PCIe）時偏好 pipeline parallelism。

Mnemonic: Tensor = 將層分割到 GPU（需要快速連結）。Pipeline = 將層堆疊在 GPU 上（需要較少頻寬）。

## Q120
Type: single
Difficulty: 2
Tags: monitoring, capacity-planning
Concepts: inference-capacity-planning
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

對於具有不可預測查詢複雜度的 agentic 系統，容量應如何規劃？

A. 為平均負載配置並希望一切順利
B. 分析請求複雜度分布（簡單/中等/複雜），為 P95 負載配置搭配激增的自動擴展，為意外複雜度激增維持緩衝，並使用基於佇列的負載削減來優雅處理過載
C. 始終為最大可能負載配置
D. 使用單一伺服器並限制使用者存取

Answer: B

Hint: 平均容量 + 意外激增 = 中斷。始終最大容量 = 浪費金錢。什麼是中間地帶？

Explanation: Agentic 系統的容量規劃必須考慮複雜度變異。P95 配置搭配自動擴展有效處理大多數情況，而基於佇列的負載削減防止極端激增時的完全故障。理解複雜度分布啟用基礎容量的正確規模化。

Why others wrong: 平均配置無法處理激增（A）；最大配置成本過高（C）；單一伺服器沒有冗餘或可擴展性（D）。

Trap: 使用請求計數而非加權複雜度進行容量規劃——100 個簡單查詢和 100 個複雜多工具查詢需要非常不同的資源。

Mnemonic: P95 基礎 + 激增自動擴展 + 溢出佇列 = 成本有效的彈性

## Q121
Type: single
Difficulty: 3
Tags: safety, supply-chain
Concepts: model-supply-chain-security
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

一個 agentic 系統使用從開放儲存庫下載的第三方 embedding 模型。這引入什麼供應鏈安全風險？

A. 沒有風險——開源模型總是安全的
B. 模型可能包含嵌入的後門（在特定輸入上啟動的木馬觸發器）、產生偏見或不正確嵌入的資料投毒，或模型載入管線中的惡意程式碼——所有這些都可能透過正常測試無法偵測
C. 模型會比商業替代品更慢
D. 開源模型不支援嵌入

Answer: B

Hint: 你會不驗證來源就執行從網路下載的任意程式碼嗎？

Explanation: 模型供應鏈攻擊是日益增長的疑慮。帶後門的模型可以在乾淨輸入上正常行為同時在觸發輸入上產出被操縱的輸出。被投毒的嵌入可能系統性地錯誤表達某些概念。惡意模型檔案可以在載入時執行程式碼（pickle 反序列化攻擊）。

Why others wrong: 開源模型與任何軟體有相同的供應鏈風險（A）；速度取決於架構而非授權（C）；許多優秀的 embedding 模型是開源的（D）。

Trap: 因為知名就隱式信任模型中心——流行的儲存庫曾有通過基本檢查的惡意模型被上傳。

Mnemonic: 模型 = 程式碼。不受信任的模型 = 不受信任的程式碼。驗證來源，掃描後門。

## Q122
Type: single
Difficulty: 1
Tags: human-ai, user-expectations
Concepts: expectation-management
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

agentic 系統應如何設定使用者對其能力的期望？

A. 聲稱它什麼都能做以最大化採用
B. 在入門期間清楚溝通 agent 能做什麼和不能做什麼，在使用期間提供適合範圍的信心指標，並優雅地拒絕範圍外請求並建議替代資源
C. 不提供關於能力的資訊讓使用者自己發現
D. 低估能力以避免失望

Answer: B

Hint: 設定準確的期望帶來滿意的使用者；過度承諾帶來沮喪的使用者。

Explanation: 入門期間的準確期望設定防止過度依賴和使用不足。使用中的信心指標幫助使用者每回應校準信任。優雅的範圍管理（帶替代方案的拒絕）在對局限性誠實的同時維持信任。

Why others wrong: 過度宣稱造成失望並侵蝕信任（A）；沒有指導導致沮喪和誤用（C）；低估導致使用不足（D）。

Trap: 為了推動採用而過度承諾能力——當 agent 無法兌現時，短期增益被長期信任侵蝕抵消。

Mnemonic: 準確承諾，一致交付，優雅拒絕。信任是隨時間贏得的。

## Q123
Type: single
Difficulty: 2
Tags: agent-development, memory-persistence
Concepts: persistent-memory-implementation
Domain: Domain 2 — Agent Development
DomainNumber: 2

一個 agent 需要跨 session 記住使用者偏好（例如偏好的回應格式、經常問的主題、過去的修正）。這應如何實作？

A. 透過每次 session 後微調將偏好儲存在 LLM 的權重中
B. 使用持久化使用者檔案儲存（資料庫或鍵值儲存）在 session 開始時將相關偏好載入 system prompt，並根據明確的使用者回饋和觀察到的模式更新檔案
C. 依賴使用者在每次 session 開始時重新陳述他們的偏好
D. 將偏好儲存在瀏覽器 cookies 中

Answer: B

Hint: 好的助理如何在不需要你重複的情況下記住你的偏好？

Explanation: 持久化使用者檔案儲存將偏好儲存與 LLM 和對話上下文解耦。在 session 開始時載入相關偏好提供連續性，而根據回饋更新建立學習系統。這比 in-context learning 更可靠，比手動重新指定更友善。

Why others wrong: 每使用者微調不實際且不可擴展（A）；要求重新指定是差劣的使用者體驗（C）；cookies 是客戶端的、不可靠的且容量有限（D）。

Trap: 在 system prompt 中儲存所有東西——使用者檔案可能增長很大並消耗寶貴的 context window 空間。僅載入相關偏好。

Mnemonic: 使用者檔案 DB → session 開始載入相關偏好 → 從回饋更新

## Q124
Type: single
Difficulty: 3
Tags: evaluation, multi-turn-eval
Concepts: multi-turn-evaluation
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

評估單輪回應很簡單，但什麼使多輪 agent 評估根本上更具挑戰性？

A. 多輪對話只是多個單輪評估
B. 多輪評估必須評估跨輪的連貫性（agent 是否自相矛盾？）、上下文利用（它記住早期資訊嗎？）、漸進推理（它建立在先前步驟上嗎？）和錯誤恢復——這些都是單輪評估無法捕捉的
C. 多輪對話太短無法評估
D. 多輪評估只需要檢查最後的回應

Answer: B

Hint: 對話不只是各部分的總和——跨輪存在哪些單輪中不存在的湧現屬性？

Explanation: 多輪評估引入單輪中不存在的維度：時間連貫性（不自相矛盾）、上下文保留（記住早期陳述）、漸進推理（跨輪建立論證）和錯誤恢復（修正早期錯誤）。這些需要將對話作為一個單元評估而非個別輪次。

Why others wrong: 多輪有單輪評估遺漏的湧現屬性（A）；多輪對話可以非常長（C）；早期輪次設定影響後續輪次的上下文（D）。

Trap: 獨立評估每輪並取平均分數——這遺漏連貫性問題，其中個別輪次沒問題但整個對話是矛盾或不連貫的。

Mnemonic: 多輪評估 = 連貫性 + 記憶 + 漸進 + 恢復。整體 > 部分之和。

## Q125
Type: single
Difficulty: 2
Tags: deployment, secret-management
Concepts: secrets-in-deployment
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

使用容器部署 agentic 服務時，密鑰（API 金鑰、資料庫密碼）應如何管理？

A. 硬編碼在容器映像中
B. 在執行時透過來自密鑰管理器（例如 HashiCorp Vault、AWS Secrets Manager）的環境變數注入，永不將它們烘焙到映像中，並排程零停機輪換支援
C. 儲存在公開配置檔案中
D. 包含在容器的 Dockerfile 中

Answer: B

Hint: 如果有人從登錄處拉取你的容器映像，他們應該得到你的 API 金鑰嗎？

Explanation: 從密鑰管理器在執行時注入的密鑰永不存在於容器映像、原始碼或配置檔案中。這防止透過映像登錄、原始碼控制或容器檢查的曝露。帶零停機支援的自動輪換確保密鑰不會過時或被妥協。

Why others wrong: 映像中硬編碼的密鑰對任何有映像存取的人曝露（A）；公開配置檔案是公開可讀的（C）；Dockerfile 在原始碼控制和映像層中（D）。

Trap: 使用 docker-compose.yml 中硬編碼的環境變數——這仍是將密鑰烘焙到配置中。它們應來自密鑰管理器。

Mnemonic: 密鑰：永不在程式碼中，永不在映像中，永不在配置中。始終來自密鑰管理器，始終輪換。

## Q126
Type: single
Difficulty: 2
Tags: cognition, abstraction-levels
Concepts: reasoning-abstraction
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

當 agent 在太低的抽象層級推理（專注於實作細節而非策略）時，會出現什麼問題？

A. Agent 產出更快的回應
B. Agent 迷失在細節中，做出局部最優但全局次優的決策，無法看到全局——類似於一個只專注下一步的棋手錯過策略機會
C. Agent 使用更少 token
D. Agent 變得更有創意

Answer: B

Hint: 見樹不見林——agent 的等價物是什麼？

Explanation: 低層級推理導致「隧道視野」，agent 最佳化個別步驟而不考慮整體目標。例如，agent 可能為每個子問題找到最佳資料庫查詢而不認識到一個不同的單一查詢可以更有效率地回答所有問題。

Why others wrong: 細節層級推理由於更多步驟通常更慢（A）；它通常透過冗長推理使用更多 token（C）；它約束而非增強創意（D）。

Trap: 假設更詳細的推理總是更好——在正確抽象層級的策略推理通常以更少的努力產出更好的結果。

Mnemonic: 正確抽象 = 正確決策。太低 = 隧道視野。太高 = 遺漏細節。找到甜蜜點。

## Q127
Type: single
Difficulty: 2
Tags: knowledge-integration, data-quality
Concepts: knowledge-base-quality
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

一個 RAG agent 儘管查詢清楚但持續檢索不相關的文件。在驗證 embedding 模型表現良好後，最可能的原因是什麼？

A. 向量資料庫太慢
B. 知識庫包含雜訊、重複或結構差的文件污染了嵌入空間——是資料品質問題而非模型品質問題
C. 使用者打字太快
D. LLM 正在幻覺搜尋結果

Answer: B

Hint: 垃圾進，垃圾出——如果文件雜亂，嵌入就會雜亂。

Explanation: 排除模型問題後，差劣的文件品質是差劣 RAG 檢索最常見的原因。重複膨脹某些主題、雜訊文字（頁首、頁尾、樣板）建立誤導性嵌入，以及差劣結構（在分塊中混合主題）降低檢索精確度。

Why others wrong: 資料庫速度影響延遲而非相關性（A）；打字速度無關（C）；LLM 不執行檢索步驟（D）。

Trap: 將實際上是資料品質問題的檢索問題歸咎於 embedding 模型或向量資料庫——總是先稽核知識庫。

Mnemonic: 差劣檢索？先檢查資料：重複、雜訊、結構。模型通常不是問題。

## Q128
Type: single
Difficulty: 3
Tags: nvidia-platform, nemo-customization
Concepts: nemo-peft
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

透過 NeMo 框架使用 LoRA（Low-Rank Adaptation）與完全微調相比，自定義 agent 的 LLM 的優勢是什麼？

A. LoRA 總是產出比完全微調更好的結果
B. LoRA 只訓練少量額外參數（通常 < 基礎模型的 1%），將計算需求減少 10-100 倍，能在單一基礎模型上作為可替換適配器實現多個自定義，並減少災難性遺忘的風險
C. LoRA 不需要任何訓練資料
D. LoRA 永久修改基礎模型的權重

Answer: B

Hint: 為什麼在調整幾百萬個就能達到類似結果時要重新訓練所有 700 億個參數？

Explanation: LoRA 在凍結的基礎模型層中新增小的可訓練矩陣，學習領域特定的適配而不修改完整模型。好處：大幅減少計算/記憶體需求、多個適配器可在一個基礎模型上共享、保留一般能力（更少遺忘），以及透過移除適配器輕鬆回滾。

Why others wrong: 對某些任務完全微調可以產出更好結果（A）；LoRA 仍需要訓練資料（C）；LoRA 保留基礎權重並新增獨立的適配器權重（D）。

Trap: 以為 LoRA 始終是完全微調的完美替代——對需要顯著行為變更的任務，完全微調可能仍然必要。

Mnemonic: LoRA = 凍結巨人上的小適配器。訓練便宜，替換容易，對基礎模型安全。

## Q129
Type: single
Difficulty: 2
Tags: monitoring, runbook
Concepts: incident-runbooks
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

agentic 系統的事件運行手冊應包含什麼是傳統服務運行手冊沒有的？

A. 值班團隊的聯絡資訊
B. Agent 特定的診斷程序：如何檢查推理迴圈、如何檢查 agent 最近 N 個決策和工具呼叫、如何驗證護欄正在運作、如何切換到沒有工具存取的降級模式，以及如何優雅地排空活躍對話
C. 伺服器硬體規格
D. 公司的組織圖

Answer: B

Hint: 與傳統 API 相比，哪些除錯步驟是 agentic 系統獨有的？

Explanation: Agentic 系統運行手冊需要 agent 獨有的程序：檢查決策日誌中的迴圈、驗證護欄健康、檢查工具可用性、排空多輪對話（不僅是 HTTP 請求），以及切換到保留基本功能的降級模式。

Why others wrong: 聯絡資訊在所有運行手冊中而非 agent 特定（A）；硬體規格是基礎設施文件（C）；組織圖是組織性的而非營運性的（D）。

Trap: 對 agentic 系統重用標準 API 運行手冊——它們遺漏 agent 特定的故障模式如推理迴圈、護欄繞過和對話狀態損壞。

Mnemonic: Agent 運行手冊額外項：推理迴圈？護欄健康？工具存活？對話排空？

## Q130
Type: single
Difficulty: 3
Tags: safety, eu-ai-act
Concepts: regulatory-compliance
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

根據歐盟 AI 法案，用於求職者篩選的 agentic 系統被分類為「高風險」。這施加什麼合規要求？

A. 與低風險系統相比沒有額外要求
B. 強制要求包括：風險管理系統、高品質訓練資料文件、對部署者的透明度和資訊、人類監督機制、準確性和穩健性測試，以及在部署前在歐盟 AI 資料庫中註冊
C. 只需要隱私政策
D. 系統必須是開源的

Answer: B

Hint: 高風險 = 高合規負擔。歐盟要求什麼保障措施？

Explanation: 歐盟 AI 法案的高風險分類（包括就業/招募 AI）施加廣泛要求：記錄的風險管理、資料治理、對使用者和部署者的透明度、人類監督能力、準確性/穩健性基準、上市後監控的日誌，以及在歐盟資料庫中的註冊。

Why others wrong: 高風險系統有廣泛的額外要求（A）；僅隱私政策不足（C）；不要求開源（D）。

Trap: 假設以美國為中心的合規標準在全球足夠——歐盟 AI 法案有與 NIST AI RMF 等自願框架不同的特定、詳細要求。

Mnemonic: 歐盟 AI 法案高風險 = 風險管理 + 資料品質 + 透明度 + 人類監督 + 測試 + 註冊

## Q131
Type: single
Difficulty: 2
Tags: agent-development, workflow-patterns
Concepts: map-reduce-agents
Domain: Domain 2 — Agent Development
DomainNumber: 2

一個文件分析任務需要摘要 50 頁。每頁可以獨立摘要，但最終摘要必須綜合所有頁面摘要。哪種 agentic 模式最適合？

A. 在單一 LLM 呼叫中處理所有 50 頁
B. Map-reduce 模式——map：獨立摘要每頁（可平行化），reduce：將所有頁面摘要綜合為連貫的最終摘要
C. 僅摘要第一頁和最後一頁
D. 請使用者自己摘要文件

Answer: B

Hint: 需要合併的獨立子任務——這匹配什麼分散式計算模式？

Explanation: Map-reduce 自然適合這個任務：map 階段獨立處理頁面（完全可平行），產出頁面摘要。Reduce 階段將這些合併為連貫的最終摘要。這處理超出 context window 的文件同時利用平行性加速。

Why others wrong: 50 頁通常超出上下文限制（A）；部分摘要遺漏大部分內容（C）；手動摘要違背自動化的目的（D）。

Trap: 當頁面可以平行化時循序處理——map-reduce 的關鍵優勢是啟用獨立子任務的平行處理。

Mnemonic: 獨立部分？平行 map 它們。需要合併結果？一起 reduce。

## Q132
Type: single
Difficulty: 2
Tags: evaluation, user-satisfaction
Concepts: user-centric-evaluation
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

為什麼 agent 在自動化評估基準上得高分但收到差劣的使用者滿意度評分？

A. 使用者總是偏好表現差的系統
B. 自動化基準測試衡量策劃測試案例上的任務完成，但使用者關心回應延遲、溝通風格、處理模糊性、優雅的故障行為，以及互動所需的努力——這些是基準通常不衡量的維度
C. 自動化基準總是錯的
D. 使用者滿意度不是有效指標

Answer: B

Hint: 一個以粗魯、緩慢的方式正確回答且需要三個澄清問題——技術上正確但體驗差。

Explanation: 基準最佳化在明確定義任務上的正確性。使用者滿意度包含主觀維度：回應是否及時？語言是否自然？Agent 是否優雅處理模糊性還是問太多澄清問題？錯誤是否優雅降級還是當機？這些體驗因素主導真實世界滿意度。

Why others wrong: 使用者偏好表現更好的系統，但「更好」不僅是正確性（A）；基準有用但不完整（C）；使用者滿意度是關鍵指標（D）。

Trap: 只最佳化基準分數而忽略使用者體驗——基準上得分最高的 agent 可能不是使用者偏好的。

Mnemonic: 基準 = 任務正確性。使用者 = 正確性 + 速度 + 風格 + 錯誤處理 + 努力

## Q133
Type: single
Difficulty: 3
Tags: deployment, disaster-recovery
Concepts: agent-dr-planning
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

與傳統無狀態 API 相比，agentic 系統有什麼額外的災難復原挑戰？

A. Agentic 系統不需要災難復原
B. 多輪對話狀態和進行中的 agent 操作必須可恢復——不像每個請求獨立的無狀態 API，agentic 系統有進行中的對話、待處理的工具呼叫和累積的上下文，沒有狀態複製和操作日誌就會丟失
C. Agentic 系統使用更少記憶體所以災難復原更簡單
D. 傳統 API 有更難的災難復原要求

Answer: B

Hint: 無狀態 API 可以乾淨重啟。一個有 10 個待處理工具呼叫的對話中的 agent 不能。

Explanation: Agentic 系統維持狀態：對話歷史、待處理操作、累積上下文和使用者 session 資料。災難復原必須將此狀態複製到備用區域並記錄進行中操作使它們能在故障轉移後恢復，而非只恢復無狀態端點。

Why others wrong: 所有生產系統都需要災難復原規劃（A）；agent 通常使用更多記憶體（C）；agent 有超越 API 的額外災難復原要求（D）。

Trap: 對有狀態 agentic 系統應用無狀態 API 災難復原策略——恢復服務端點不足如果對話狀態和進行中操作丟失。

Mnemonic: 無狀態 API：重啟 = 恢復。Agentic：重啟 ≠ 恢復（狀態丟失）。複製狀態 + 記錄操作。

## Q134
Type: single
Difficulty: 2
Tags: cognition, uncertainty-management
Concepts: confidence-estimation
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

agent 如何表達校準的不確定性以改善決策品質？

A. 始終在每個回應中表達 100% 信心
B. 使用技術如口語化機率（「我大約 70% 有信心」）、多樣本一致性檢查（如果同一問題在不同樣本中產出不同答案，信心應低），以及校準的人類審查員升級閾值
C. 永不表達任何信心層級
D. 僅在否定回應中表達不確定性

Answer: B

Hint: 一個良好校準的 agent 說「我 70% 有信心」並在它這樣說的時候約 70% 的時間是正確的。

Explanation: 校準的不確定性幫助使用者和下游系統做出適當決策。口語化機率提供明確信心。多樣本一致性衡量內部一致性。兩者共同啟用風險感知的決策：高信心答案被執行，低信心答案觸發驗證或升級。

Why others wrong: 虛假信心導致未被檢查的錯誤（A）；隱藏不確定性阻止適當的謹慎（C）；不確定性在所有回應類型中都相關（D）。

Trap: 使用原始 LLM 機率作為校準信心——LLM 通常校準不良（對錯誤答案高信心）。需要明確的校準技術。

Mnemonic: 校準的不確定性 = 正確的信心水平。70% 有信心 = 70% 的時間正確。

## Q135
Type: single
Difficulty: 2
Tags: knowledge-integration, temporal-relevance
Concepts: time-aware-retrieval
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

一個 RAG agent 檢索舊的政策文件而非當前的因為兩者語意相似。這應如何解決？

A. 從知識庫刪除所有舊文件
B. 實施帶新近度提升的時間感知檢索——對較新文件應用評分提升、使用中繼資料過濾器進行文件有效日期，並維持版本追蹤使被取代的文件被降低優先級或歸檔
C. 忽略問題因為舊資訊有時有用
D. 使用關鍵字搜尋取代語意搜尋

Answer: B

Hint: 2023 年和 2026 年的政策可能有類似措辭但非常不同的內容。系統如何偏好當前的？

Explanation: 時間感知檢索解決 RAG 系統中的時間相關性問題。新近度提升根據文件新鮮度調整分數。有效性中繼資料標記哪個版本是當前的。版本追蹤歸檔被取代的文件使它們不與當前文件在檢索中競爭。

Why others wrong: 舊文件可能仍需用於歷史查詢（A）；忽略問題給使用者過時資訊（C）；關鍵字搜尋有同樣的時間問題（D）。

Trap: 刪除舊文件——它們可能需要用於稽核軌跡、歷史查詢或理解政策演進。

Mnemonic: 同主題，不同日期 → 新近度提升 + 有效日期 + 版本追蹤

## Q136
Type: single
Difficulty: 2
Tags: nvidia-platform, blueprint-rag
Concepts: nvidia-rag-blueprint
Domain: Domain 7 — NVIDIA Platform Implementation
DomainNumber: 7

在 NVIDIA RAG agent 藍圖中，檢索管線的建議堆疊是什麼？

A. 任何帶全文搜尋的 SQL 資料庫
B. NeMo Retriever 用於嵌入生成和文件處理、GPU 加速的向量資料庫（如 Milvus）用於儲存和搜尋，以及 NIM 用於從檢索上下文生成最終回應的 LLM 推論
C. 帶 grep 搜尋的平面檔案系統
D. 僅 LLM 沒有檢索元件

Answer: B

Hint: NVIDIA 的堆疊為 RAG 的每個部分有專門元件：嵌入 → 儲存 → 生成。

Explanation: NVIDIA 的 RAG 藍圖使用：NeMo Retriever 進行 GPU 加速的嵌入和文件處理（RAG 中的 R）、Milvus 或類似向量 DB 進行可擴展的帶過濾的相似度搜尋，以及 NIM 進行最佳化 LLM 推論（RAG 中的 G）。每個元件都是 GPU 最佳化的並設計為協同工作。

Why others wrong: SQL 資料庫未針對向量相似度搜尋最佳化（A）；平面檔案無法處理生產規模的檢索（C）；RAG 按定義包含檢索（D）。

Trap: 僅使用向量資料庫而沒有 NeMo Retriever 的預處理——沒有智慧處理的原始文件分塊產出較低品質的嵌入。

Mnemonic: NVIDIA RAG 堆疊：NeMo Retriever（R）→ 向量 DB（儲存）→ NIM（G）

## Q137
Type: single
Difficulty: 3
Tags: monitoring, chaos-engineering
Concepts: chaos-testing-agents
Domain: Domain 8 — Run, Monitor, and Maintain
DomainNumber: 8

混沌工程原則應如何應用於測試 agentic 系統的彈性？

A. 不預警地隨機關閉生產伺服器
B. 在受控的預備環境中，系統性地注入故障——工具超時、LLM 服務退化、損壞的檢索結果、增加的延遲——並驗證系統優雅降級，監控護欄保持活躍、對話被保留，且使用者被適當告知
C. 永不測試故障因為可能破壞某些東西
D. 僅在維護窗口測試

Answer: B

Hint: 混沌工程問：「當這個失敗時什麼會壞？」——以受控方式。

Explanation: Agent 的混沌工程測試 agentic 系統特有的故障模式的彈性：工具中斷、LLM 退化、檢索損壞和延遲飆升。在預備環境的受控注入揭示系統是否優雅降級、保留狀態、維持安全護欄，並向使用者溝通問題。

Why others wrong: 不受控的生產混沌是危險的（A）；永不測試意味著故障只在生產中被發現（C）；維護窗口不需要混沌測試——正常操作才需要（D）。

Trap: 只測試正常路徑——agentic 系統中最危險的故障來自退化元件的組合，只有透過系統性混沌測試才能發現。

Mnemonic: 在預備環境安全地破壞 → 修正弱點 → 在生產中存活故障

## Q138
Type: single
Difficulty: 2
Tags: safety, consent-management
Concepts: data-consent-agents
Domain: Domain 9 — Safety, Ethics, and Compliance
DomainNumber: 9

一個 agentic 系統需要處理使用者資料以進行個性化。需要什麼同意管理方法？

A. 預設處理所有資料，使用者抱怨時再退出
B. 明確的選擇加入同意——清楚解釋收集什麼資料、如何用於個性化、保留多長時間，並提供隨時查看、修改和刪除資料的簡易機制
C. 僅付費使用者需要同意
D. 服務條款勾選框足以涵蓋任何資料使用

Answer: B

Hint: GDPR 和類似法規要求知情、具體和自由給予的同意。這看起來像什麼？

Explanation: 現代資料保護法規（GDPR、CCPA）要求資料處理的明確、知情同意。使用者必須理解收集什麼、為什麼，以及保留多長時間。他們必須有簡易的存取以查看、修改和刪除資料。通用的服務條款接受不足以涵蓋特定的處理目的。

Why others wrong: 預設處理違反資料保護法規（A）；所有使用者都有資料權利不論付費（C）；通用服務條款不滿足特定同意要求（D）。

Trap: 將資料處理同意埋在 50 頁服務條款中——監管機構要求每個資料處理目的的具體、可理解的同意。

Mnemonic: 同意 = 明確 + 知情 + 具體 + 可撤銷。不是勾選框，是對話。

## Q139
Type: single
Difficulty: 2
Tags: human-ai, onboarding
Concepts: user-onboarding-design
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

引導新使用者進入 agentic 系統最有效的方法是什麼？

A. 提供 100 頁的使用者手冊
B. 互動式引導體驗——透過 2-3 個範例互動展示 agent 的能力，讓使用者在有引導的情況下嘗試低風險任務，然後隨著熟練度增加逐漸減少引導
C. 不引導——使用者會自己搞清楚
D. 單一工具提示說「輸入你的問題」

Answer: B

Hint: 你如何最好地學習新工具——讀手冊還是在有引導幫助下嘗試？

Explanation: 透過範例互動的互動式引導展示而非告知，建立使用者信心和心理模型。低風險的引導任務讓使用者安全地實驗。漸進減少引導（支架）在防止新使用者被淹沒的同時建立獨立性。

Why others wrong: 手冊很少被閱讀（A）；不引導導致誤用和沮喪（C）；單一工具提示不傳達能力或設定期望（D）。

Trap: 過度文件化而非讓使用者透過做來學——互動式引導有更高的參與度和保留率。

Mnemonic: 展示、嘗試、引導、放手。而非：閱讀、猜測、失敗、抱怨。

## Q140
Type: single
Difficulty: 3
Tags: agent-development, tool-versioning
Concepts: tool-version-compatibility
Domain: Domain 2 — Agent Development
DomainNumber: 2

一個 agent 的資料庫查詢工具被更新以新格式回傳結果。Agent 是用舊格式訓練/提示的。最安全的遷移方法是什麼？

A. 更新工具並希望 agent 適應
B. 實作適配器層在過渡期間將新格式翻譯為舊格式，更新 agent 的 prompt 和評估套件以處理新格式，執行 A/B 測試比較舊和新格式處理，然後在新格式完全採用後棄用適配器
C. 永遠保持舊格式
D. 移除工具並新增一個名稱不同的新工具

Answer: B

Hint: 你如何在移動的車上換輪胎？你不——你先安全停車。

Explanation: 適配器模式實現零停機遷移：現有 agent 行為透過格式翻譯保留，同時新格式逐步被採用。A/B 測試驗證新格式在完全切換前正確運作。這防止格式不相容造成的靜默故障。

Why others wrong: 希望 agent 適應有生產故障的風險（A）；永不更新阻止改進（C）；重命名造成不必要的干擾且可能破壞引用它的其他工具（D）。

Trap: 更新工具輸出格式而不更新 agent 對其的理解——agent 可能錯誤解析結果，產出靜默資料損壞。

Mnemonic: 工具格式變更：適配器橋 → 更新 agent → A/B 測試 → 移除橋

## Q141
Type: single
Difficulty: 2
Tags: evaluation, benchmarks
Concepts: agent-benchmarks
Domain: Domain 3 — Evaluation and Tuning
DomainNumber: 3

在 agentic AI 評估的脈絡中，什麼是 SWE-bench？

A. 影像分類的資料集
B. 評估 agent 解決來自 GitHub 儲存庫的真實世界軟體工程問題能力的基準測試，衡量 agent 在程式碼理解、除錯和多檔案程式碼變更方面的能力——測試超越文字生成的實際 agentic 能力
C. 推論伺服器的速度基準測試
D. 語音辨識的基準測試

Answer: B

Hint: SWE = 軟體工程。軟體工程基準測試會測試什麼類型的任務？

Explanation: SWE-bench 測試 agent 是否能解決真實 GitHub issues：閱讀程式碼、理解 bug，並在多個檔案中產出可運作的修正。它很重要因為它在真實世界任務上測試完整的 agentic 迴圈（理解 → 規劃 → 編碼 → 測試）而非合成基準。

Why others wrong: SWE-bench 用於程式碼任務而非影像（A）；它測試正確性而非速度（C）；它用於程式碼而非語音（D）。

Trap: 將 SWE-bench 視為完整評估——它測試編碼能力但不測試其他 agentic 技能如對話管理、工具編排或安全。

Mnemonic: SWE-bench = 真實 GitHub bug + agent 必須修正它們。測試實際編碼 agent 能力。

## Q142
Type: single
Difficulty: 2
Tags: deployment, feature-flags
Concepts: feature-flags-agents
Domain: Domain 4 — Deployment and Scaling
DomainNumber: 4

Feature flag 如何在 agentic 系統部署中使用？

A. Feature flag 只對 Web 應用有用
B. Feature flag 啟用對特定使用者群體新 agent 功能（新工具、更新的 prompt、不同模型）的漸進推出，能在偵測到問題時即時停用功能——提供對 agent 行為的細粒度控制而不需重新部署
C. Feature flag 取代測試的需要
D. Feature flag 和環境變數是一樣的

Answer: B

Hint: 如果你能為 10% 的使用者開啟新工具，觀察指標，然後逐步增加呢？

Explanation: Agentic 系統中的 feature flag 控制哪些功能對哪些使用者是活躍的。這啟用目標推出（新工具給 beta 使用者）、即時回滾（停用有問題的功能），以及實驗（為不同群體 A/B 測試不同模型）——全部不需重新部署。

Why others wrong: Feature flag 適用於任何軟體系統包括 agent（A）；flag 控制推出而非取代測試（C）；feature flag 是動態的且通常是使用者群體目標化的，不像靜態環境變數（D）。

Trap: 僅使用二元 feature flag（開/關）——百分比推出和使用者群體目標化為漸進功能發布提供更多控制。

Mnemonic: Feature flag = agent 功能的遙控器。漸進推出，即時終止。

## Q143
Type: single
Difficulty: 3
Tags: cognition, analogy-reasoning
Concepts: analogical-reasoning
Domain: Domain 5 — Cognition, Planning, and Memory
DomainNumber: 5

一個 agent 遇到之前沒見過的新問題。來自情節記憶的類比推理如何改善其方法？

A. 不能——agent 必須之前見過完全相同的問題
B. Agent 從情節記憶中檢索相似的過去經歷（類似物），識別過去解決方案與當前問題之間的結構性相似，並將解決策略適應到新脈絡——在不需要精確匹配的情況下轉移學習到的方法
C. Agent 對新問題應總是忽略過去經歷
D. 類比推理只適用於數學問題

Answer: B

Hint: 醫生透過認識到與之前治療過的疾病的相似性來治療罕見疾病——同樣的原則。

Explanation: 類比推理啟用知識轉移：agent 認識新問題和過去問題之間的結構相似性，擷取適用的解決策略同時適應脈絡差異。這在跨多次互動累積經驗的 agentic 系統中特別強大。

Why others wrong: 類比推理專門透過相似性轉移處理新問題（A）；過去經歷通常包含對新情況有用的模式（C）；類比推理廣泛適用於各領域（D）。

Trap: 要求精確匹配才能轉移經驗——類比推理的價值正是它跨結構相似但表面不同的問題運作。

Mnemonic: 新問題 + 相似過去經歷 = 適應解決方案。轉移模式而非精確答案。

## Q144
Type: single
Difficulty: 2
Tags: knowledge-integration, access-control
Concepts: rag-access-control
Domain: Domain 6 — Knowledge Integration and Data Handling
DomainNumber: 6

在企業 RAG 系統中，某些文件被分類為機密。存取控制應如何實施？

A. 相信 LLM 不會揭露機密資訊
B. 在檢索層強制存取控制——為文件標記存取層級，在請求使用者的權限基礎上過濾檢索結果，在它們到達 LLM 上下文之前，確保機密文件永不包含在未授權使用者的 prompt 中
C. 加聲明說「某些資訊可能是機密的」
D. 為每個安全層級建立獨立的向量資料庫並手動分配使用者

Answer: B

Hint: 如果 LLM 永遠看不到機密文件，它就不能洩漏其內容。過濾器應在哪裡？

Explanation: 存取控制必須在檢索時強制執行，在文件進入 LLM 上下文之前。一旦機密文字在 prompt 中，LLM 可能引用或複製它。文件層級存取標記結合檢索期間的使用者權限檢查確保未授權內容永不到達模型。

Why others wrong: LLM 無法被信任來強制存取控制（A）；聲明不防止洩漏（C）；獨立資料庫造成管理開銷且不適用於複雜權限模型（D）。

Trap: 依賴 LLM 的指令「不揭露機密資訊」——它無法保證這一點，且 prompt injection 可以覆蓋指令。

Mnemonic: 存取控制在檢索而非生成。永不讓未授權資料進入 prompt。

## Q145
Type: single
Difficulty: 3
Tags: human-ai, ethical-dilemmas
Concepts: ethical-decision-framework
Domain: Domain 10 — Human-AI Interaction and Oversight
DomainNumber: 10

一個 agent 必須在不同倫理原則衝突的情況下做出推薦（例如使用者隱私 vs 組織透明度）。系統應如何設計？

A. Agent 應總是優先考慮組織而非使用者
B. 系統應有由利害關係人建立的預定義倫理優先框架，清楚記錄優先決定背後的推理，將真正的困境升級到人類決策者而非自主解決，並維持倫理推理的稽核軌跡
C. Agent 應忽略倫理考量並最佳化效率
D. 每個開發者應根據個人價值觀決定倫理優先級

Answer: B

Hint: 誰應該決定倫理優先級——AI、個別開發者，還是一個有意的組織過程？

Explanation: 倫理優先框架應是有意的組織決策，而非臨時的開發者選擇或自主 agent 決策。對於原則衝突的真正困境，人類升級確保問責。文件和稽核軌跡啟用倫理決策隨時間的審查和改進。

Why others wrong: 總是優先組織可能違反使用者權利和法規（A）；忽略倫理造成法律和聲譽風險（C）；不一致的個人倫理導致不可預測的系統行為（D）。

Trap: 讓 agent 自主解決倫理困境——倫理取捨需要人類判斷、問責和被質疑和申訴的能力。

Mnemonic: 倫理框架 = 預定義 + 記錄 + 人類升級 + 稽核。不是 AI 的自主決定。
