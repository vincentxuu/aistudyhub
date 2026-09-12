import { rpgZh } from './rpg.ts'

export default {
  ...rpgZh,
  // Site
  'site.name': 'AI Exam Prep',
  'site.tagline': '用考試驗證學習',

  // Landing
  'landing.title': '征服 AI 認證考試',
  'landing.subtitle': '模擬考試、即時回饋、弱項追蹤',
  'landing.questions': '{count} 題',
  'landing.mockExam': '模擬考試（{count} 題）',
  'landing.practice': '練習模式',
  'landing.domains': '個領域',

  // Exam
  'exam.title': '模擬考試',
  'exam.exit': '離開',
  'exam.submit': '交卷',
  'exam.submitConfirm': '確定要交卷嗎？還有 {count} 題未作答。',
  'exam.submitAll': '確定要交卷嗎？',
  'exam.flag': '標記',
  'exam.flagged': '已標記',
  'exam.prev': '上一題',
  'exam.next': '下一題',
  'exam.of': '/',
  'exam.timeUp': '時間到！已自動交卷。',
  'exam.questionGrid': '題目總覽',
  'exam.answered': '已答',
  'exam.unanswered': '未答',
  'exam.review': '標記複查',

  // Practice
  'practice.simulateExam': '模擬真實考試',
  'practice.simulateExamDesc': '65 題 · 90 分鐘 · 依照真實考試領域比例出題',
  'practice.or': '或',
  'practice.customPractice': '自訂練習',
  'practice.title': '練習模式',
  'practice.selectDomains': '選擇領域',
  'practice.selectDifficulty': '選擇難度',
  'practice.questionCount': '題數',
  'practice.all': '全部',
  'practice.start': '開始練習',
  'practice.showHint': '顯示提示',
  'practice.correct': '答對了！',
  'practice.wrong': '答錯了',
  'practice.explanation': '詳解',
  'practice.trap': '常見陷阱',
  'practice.mnemonic': '記憶口訣',
  'practice.whyOthersWrong': '其他選項為什麼不對',
  'practice.score': '答對 {correct}/{total}',
  'practice.finish': '練習結束',
  'practice.tryAgain': '再練一次',
  'practice.backToHome': '回首頁',

  // Results
  'results.title': '考試結果',
  'results.pass': '通過',
  'results.fail': '未通過',
  'results.score': '得分',
  'results.passingScore': '及格分數：{score}%',
  'results.domainBreakdown': '領域分析',
  'results.questionReview': '逐題回顧',
  'results.showAll': '全部',
  'results.showWrong': '只看錯題',
  'results.yourAnswer': '你的答案',
  'results.correctAnswer': '正確答案',
  'results.practiceWeak': '練習弱項',
  'results.tryAgain': '再考一次',
  'results.backToHome': '回首頁',

  // Diagnostic
  'diagnostic.title': '診斷測驗',
  'diagnostic.subtitle': '20 題快速找出你的弱項',
  'diagnostic.weakAreas': '建議加強的領域',
  'diagnostic.strongAreas': '已掌握的領域',
  'diagnostic.recommendation': '建議穩定 85% 以上再報名考試',
  'diagnostic.practiceWeak': '練習弱項',
  'diagnostic.readGuide': '閱讀備考指南',
  'diagnostic.start': '開始診斷',
  'diagnostic.complete': '診斷完成',
  'diagnostic.overallScore': '整體正確率',

  // Difficulty
  'difficulty.1': '基礎',
  'difficulty.2': '中等',
  'difficulty.3': '困難',

  // Theme
  'theme.toggle': '切換主題',

  // Language
  'lang.toggle': 'English',
  'lang.current': '繁體中文',

  // Wrong Answers
  'wrongAnswers.title': '錯題本',
  'wrongAnswers.count': '{count} 題答錯',
  'wrongAnswers.reviewed': '{count} 題已複習',
  'wrongAnswers.notReviewed': '未複習',
  'wrongAnswers.all': '全部',
  'wrongAnswers.reflection': '我為什麼選錯了？',
  'wrongAnswers.reflectionPlaceholder': '寫下你的反思，下次遇到類似題不再犯...',
  'wrongAnswers.markReviewed': '標記已複習',
  'wrongAnswers.practiceWrong': '只練錯題',
  'wrongAnswers.clearAll': '清除全部',
  'wrongAnswers.clearConfirm': '確定要清除所有錯題紀錄嗎？',
  'wrongAnswers.addedToJournal': '{count} 題已加入錯題本',
  'wrongAnswers.viewJournal': '查看錯題本',
  'wrongAnswers.empty': '太棒了！沒有錯題',
  'wrongAnswers.reviewed_label': '已複習',
  'wrongAnswers.dueToday': '{count} 題待複習',
  'wrongAnswers.startReview': '開始複習',
  'wrongAnswers.again': '重來',
  'wrongAnswers.hard': '困難',
  'wrongAnswers.good': '記住了',
  'wrongAnswers.easy': '簡單',
  'wrongAnswers.nextReview': '下次複習：{date}',
  'wrongAnswers.dueNow': '現在',
  'wrongAnswers.reviewComplete': '今日複習完成！',

  // Explanation sections
  'explanation.title': '詳解',
  'explanation.plain': '白話文解釋',
  'explanation.optionAnalysis': '選項分析',
  'explanation.references': '參考資料',
  'explanation.nextQuestion': '下一題 →',

  // Passing threshold
  'practice.passingThreshold': '通過門檻 ≥ {required}/{total}（{percent}%）',

  // Knowledge Chain
  'knowledgeChain.title': '知識鏈',
  'knowledgeChain.description': '用一條鏈記住整個領域',

  // Tips
  'tips.longStem': '長題幹技巧：從倒數第二句開始讀，確認問的是什麼，再回頭看情境。',

  // Results extras
  'results.threshold': '建議穩定 85% 以上再報名考試',
  'results.importantDomains': '合計 52%，最重要',
  'results.readGuide': '閱讀完整備考指南',

  // Study Mode
  'study.title': '學習模式',
  'study.subtitle': '逐層揭露，理解每一題',
  'study.richOnly': '只顯示有完整解析的題目',
  'study.start': '開始學習',
  'study.showHint': '顯示提示',
  'study.showAnswer': '顯示答案',
  'study.showExplanation': '顯示詳解',
  'study.showTrap': '常見陷阱',
  'study.showMnemonic': '記憶口訣',
  'study.showWhyWrong': '其他選項為什麼不對',
  'study.keyTerms': '關鍵字',
  'study.answer': '答案',
  'study.prev': '上一題',
  'study.next': '下一題',
  'study.checkAnswer': '確認答案',
  'study.correct': '答對了！',
  'study.wrong': '答錯了',

  // Settings
  'settings.title': '設定',
  'settings.language': '語言',
  'settings.theme': '主題',
  'settings.data': '學習紀錄',
  'settings.export': '匯出學習紀錄',
  'settings.import': '匯入學習紀錄',
  'settings.importSuccess': '匯入成功：{count} 筆紀錄',
  'settings.importError': '匯入失敗：格式不正確',
  'settings.clearAll': '清除所有資料',
  'settings.clearConfirm': '確定要清除所有學習紀錄嗎？此操作無法復原。',
  'settings.stats': '{exams} 次模擬考 · {wrong} 題錯題',
  'settings.bestScore': '最高 {score}%',
  'settings.noData': '尚無學習紀錄',

  // Stats
  'stats.title': '學習統計',
  'stats.empty': '還沒有考試紀錄，去做一次模擬考吧！',
  'stats.startExam': '開始模擬考',
  'stats.exams': '模擬考次數',
  'stats.avgScore': '平均分數',
  'stats.questions': '作答題數',
  'stats.studyTime': '學習時長',
  'stats.accuracy': '整體正確率',
  'stats.scoreTrend': '分數趨勢',
  'stats.weakDomains': '需加強領域',
  'stats.domainStrength': '各領域正確率',
  'stats.recentActivity': '最近考試紀錄',

  // Sync
  'sync.synced': '已同步',
  'sync.syncing': '同步中...',
  'sync.offline': '離線模式',
  'sync.error': '同步失敗',

  // Common
  'common.loading': '載入中...',
  'common.error': '發生錯誤',
} as const
