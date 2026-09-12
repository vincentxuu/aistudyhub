-- Questions table — moves question data from client-side JSON to D1

CREATE TABLE questions (
  id TEXT PRIMARY KEY,
  hash TEXT NOT NULL,
  exam_code TEXT NOT NULL,
  lang TEXT NOT NULL DEFAULT 'en',
  domain TEXT NOT NULL DEFAULT 'Unknown',
  domain_number INTEGER NOT NULL DEFAULT 0,
  difficulty INTEGER NOT NULL DEFAULT 1,
  type TEXT NOT NULL DEFAULT 'single',
  stem TEXT NOT NULL,
  options TEXT NOT NULL,
  correct_answers TEXT NOT NULL,
  hint TEXT,
  explanation TEXT,
  why_others_wrong TEXT,
  trap TEXT,
  mnemonic TEXT,
  key_terms TEXT,
  tags TEXT,
  source_file TEXT,
  generated_by TEXT DEFAULT 'human',
  reviewed INTEGER DEFAULT 0
);

CREATE INDEX idx_questions_exam_lang ON questions(exam_code, lang);
CREATE INDEX idx_questions_domain ON questions(exam_code, domain_number, lang);
