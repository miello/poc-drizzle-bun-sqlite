CREATE TABLE `projects` (
	`user_id` text PRIMARY KEY NOT NULL,
	`project_id` text
);
--> statement-breakpoint
CREATE TABLE `users` (
	`user_id` text PRIMARY KEY NOT NULL,
	`data` text
);
