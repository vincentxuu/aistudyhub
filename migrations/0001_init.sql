-- D1 Anonymous Session Persistence — Initial Schema

CREATE TABLE sessions (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  last_active_at TEXT NOT NULL,
  user_agent TEXT,
  github_user_id TEXT,
  github_username TEXT
);

CREATE INDEX idx_sessions_github ON sessions(github_user_id)
  WHERE github_user_id IS NOT NULL;

CREATE TABLE exam_results (
  id TEXT PRIMARY KEY,
  session_id TEXT NOT NULL REFERENCES sessions(id),
  exam_code TEXT NOT NULL,
  score REAL NOT NULL,
  total_questions INTEGER NOT NULL,
  correct_count INTEGER NOT NULL,
  time_taken_ms INTEGER NOT NULL,
  domain_breakdown TEXT NOT NULL,
  completed_at TEXT NOT NULL
);

CREATE INDEX idx_results_session ON exam_results(session_id, completed_at);

CREATE TABLE wrong_answers (
  id TEXT PRIMARY KEY,
  session_id TEXT NOT NULL REFERENCES sessions(id),
  question_id TEXT NOT NULL,
  exam_code TEXT NOT NULL,
  selected_answers TEXT NOT NULL,
  correct_answers TEXT NOT NULL,
  reflection TEXT,
  attempted_at TEXT NOT NULL,
  reviewed_at TEXT,
  UNIQUE(session_id, question_id)
);

CREATE INDEX idx_wrong_session ON wrong_answers(session_id, exam_code);

CREATE TABLE question_stats (
  session_id TEXT NOT NULL REFERENCES sessions(id),
  question_id TEXT NOT NULL,
  attempts INTEGER DEFAULT 0,
  correct_count INTEGER DEFAULT 0,
  last_attempted_at TEXT,
  total_time_ms INTEGER DEFAULT 0,
  PRIMARY KEY (session_id, question_id)
);

CREATE TABLE domain_mastery (
  session_id TEXT NOT NULL REFERENCES sessions(id),
  exam_code TEXT NOT NULL,
  domain TEXT NOT NULL,
  total_attempted INTEGER DEFAULT 0,
  correct_count INTEGER DEFAULT 0,
  last_practiced_at TEXT,
  PRIMARY KEY (session_id, exam_code, domain)
);
