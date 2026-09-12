-- Add ExamLab-style enrichment fields

ALTER TABLE questions ADD COLUMN plain_explanation TEXT;
ALTER TABLE questions ADD COLUMN option_analysis TEXT;
ALTER TABLE questions ADD COLUMN references_json TEXT;
