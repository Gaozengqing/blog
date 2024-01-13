(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{316:function(e,a,t){"use strict";t.r(a);var s=t(12),n=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started 🎉")]),e._v(" "),a("p",[e._v("Install and start Mysql")]),e._v(" "),a("h3",{attrs:{id:"process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process"}},[e._v("#")]),e._v(" Process")]),e._v(" "),a("ol",[a("li",[e._v("Install the MySQL service")]),e._v(" "),a("li",[e._v("Create a MySQL configuration file")]),e._v(" "),a("li",[e._v("Initialize the MySQL database")]),e._v(" "),a("li",[e._v("Start the MySQL service")])]),e._v(" "),a("h3",{attrs:{id:"install-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-command"}},[e._v("#")]),e._v(" Install command")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("mysqld"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("install Indicates the name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("of")]),e._v(" the MySQL service\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"uninstall-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uninstall-command"}},[e._v("#")]),e._v(" Uninstall command")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("mysqld "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("remove The name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("of")]),e._v(" the MySQL service\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Mysql configuration file\nIt needs to be stored in a MySQL installation directory named my.ini(windows) or my.cnf(Linux environment).")]),e._v(" "),a("h4",{attrs:{id:"common-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-configuration"}},[e._v("#")]),e._v(" Common Configuration")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\nbasedir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("MySQL installation directory\ndatadir"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" Directory "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" storing MySQL "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("database")]),e._v(" files\nport"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3306")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("port: indicates the port number used by the MySQL client to connect to the server. The default port number is 3306")]),e._v(" "),a("p",[e._v("Initialize the MySQL database\nTwo ways")]),e._v(" "),a("ol",[a("li",[e._v("mysqld --initialize-insecure (will not generate a password for the default user root)")]),e._v(" "),a("li",[e._v("mysqld --initialize --console(automatically generates a random password for the default user root)")])]),e._v(" "),a("p",[e._v("Start the MySQL service\nnet start MySQL service name")]),e._v(" "),a("h3",{attrs:{id:"stop-mysql-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop-mysql-services"}},[e._v("#")]),e._v(" Stop MySQL services")]),e._v(" "),a("p",[e._v("net stop MySQL service name")]),e._v(" "),a("p",[e._v("2, Mysql login and logout, password Settings")]),e._v(" "),a("h3",{attrs:{id:"log-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-in"}},[e._v("#")]),e._v(" Log in")]),e._v(" "),a("p",[e._v("Step 1 Write in plain text\nmysql -h hostname -u username -ppassword\n-h is the host name or ip address of MySQL\n-u Indicates the user name\n-p password\n2. Non-plaintext\nmysql -h hostname -u username -p Enter and then count the password")]),e._v(" "),a("h3",{attrs:{id:"quit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quit"}},[e._v("#")]),e._v(" Quit")]),e._v(" "),a("p",[e._v("exit;  Or quit;")]),e._v(" "),a("h3",{attrs:{id:"configure-environment-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-environment-variables"}},[e._v("#")]),e._v(" Configure environment variables")]),e._v(" "),a("p",[e._v("Run the command prompt as administrator to configure the MySQL installation directory \\bin into the PATH environment variable.")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("setx PATH "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%PATH%; MySQL installation directory \\bin"')]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("If the test is successful, log in to MySQL in the bin directory other than the MySQL installation directory")]),e._v(" "),a("h3",{attrs:{id:"change-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-password"}},[e._v("#")]),e._v(" Change password")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Format is as follows")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ALTER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("USER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'user '")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("@'localhost'")]),e._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("' New password '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# eg: Open the command prompt and log in to MySQL as user root. After successful login, set the password of user root to 123456.")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ALTER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("USER")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'root'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("@'localhost'")]),e._v(" IDENTIFIED "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'123456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h3",{attrs:{id:"extension-intellij-idea-graphical-management-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extension-intellij-idea-graphical-management-tool"}},[e._v("#")]),e._v(" Extension -IntelliJ IDEA graphical management tool")]),e._v(" "),a("p",[e._v("Tutorial address\nhttps://blog.csdn.net/m0_67906358/article/details/129449631")]),e._v(" "),a("h2",{attrs:{id:"iii-database-design-understanding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iii-database-design-understanding"}},[e._v("#")]),e._v(" III. Database Design (understanding)")]),e._v(" "),a("p",[e._v("6 stages")]),e._v(" "),a("ol",[a("li",[e._v("Demand analysis")]),e._v(" "),a("li",[e._v("Conceptual structure design")]),e._v(" "),a("li",[e._v("Logical structure design")]),e._v(" "),a("li",[e._v("Physical structure design")]),e._v(" "),a("li",[e._v("Database implementation")]),e._v(" "),a("li",[e._v("Database operation and maintenance")])]),e._v(" "),a("h6",{attrs:{id:"_1-database-designers-need-to-analyze-the-needs-of-users-record-the-analysis-results-and-form-a-demand-analysis-report"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-database-designers-need-to-analyze-the-needs-of-users-record-the-analysis-results-and-form-a-demand-analysis-report"}},[e._v("#")]),e._v(" 1. Database designers need to analyze the needs of users, record the analysis results, and form a demand analysis report.")]),e._v(" "),a("h6",{attrs:{id:"_2-in-the-key-stage-of-the-whole-database-design-a-conceptual-data-model-is-formed-through-the-synthesis-induction-and-abstraction-of-users-needs-generally-the-e-r-diagram-is-drawn-to-visually-present-the-database-designer-s-understanding-of-user-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-in-the-key-stage-of-the-whole-database-design-a-conceptual-data-model-is-formed-through-the-synthesis-induction-and-abstraction-of-users-needs-generally-the-e-r-diagram-is-drawn-to-visually-present-the-database-designer-s-understanding-of-user-requirements"}},[e._v("#")]),e._v(" 2. In the key stage of the whole database design, a conceptual data model is formed through the synthesis, induction and abstraction of users' needs. Generally, the E-R diagram is drawn to visually present the database designer's understanding of user requirements.")]),e._v(" "),a("h6",{attrs:{id:"_3-convert-the-e-r-graph-to-the-data-model-supported-by-the-database-management-system-such-as-the-relational-model-and-complete-the-transformation-of-entities-attributes-and-relationships"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-convert-the-e-r-graph-to-the-data-model-supported-by-the-database-management-system-such-as-the-relational-model-and-complete-the-transformation-of-entities-attributes-and-relationships"}},[e._v("#")]),e._v(" 3. Convert the E-R graph to the data model supported by the database management system (such as the relational model), and complete the transformation of entities, attributes, and relationships.")]),e._v(" "),a("h6",{attrs:{id:"_4-determine-the-storage-structure-and-file-type-of-the-database-for-the-logical-data-model-in-general-the-database-management-system-in-order-to-ensure-its-independence-and-portability-undertake-most-of-the-tasks-database-designers-only-need-to-consider-the-characteristics-of-the-hardware-and-operating-system-select-the-right-storage-engine-for-the-data-table-select-the-right-data-type-for-the-field-and-evaluate-the-disk-space-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-determine-the-storage-structure-and-file-type-of-the-database-for-the-logical-data-model-in-general-the-database-management-system-in-order-to-ensure-its-independence-and-portability-undertake-most-of-the-tasks-database-designers-only-need-to-consider-the-characteristics-of-the-hardware-and-operating-system-select-the-right-storage-engine-for-the-data-table-select-the-right-data-type-for-the-field-and-evaluate-the-disk-space-requirements"}},[e._v("#")]),e._v(" 4. Determine the storage structure and file type of the database for the logical data model. In general, the database management system in order to ensure its independence and portability, undertake most of the tasks, database designers only need to consider the characteristics of the hardware and operating system, select the right storage engine for the data table, select the right data type for the field, and evaluate the disk space requirements.")]),e._v(" "),a("h6",{attrs:{id:"_5-the-designer-establishes-the-database-according-to-the-results-of-logical-design-and-physical-design-writes-and-debuts-the-application-program-organizes-the-data-into-the-database-and-carries-out-the-trial-run-for-example-using-sql-statements-to-create-databases-and-data-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-the-designer-establishes-the-database-according-to-the-results-of-logical-design-and-physical-design-writes-and-debuts-the-application-program-organizes-the-data-into-the-database-and-carries-out-the-trial-run-for-example-using-sql-statements-to-create-databases-and-data-tables"}},[e._v("#")]),e._v(" 5, the designer establishes the database according to the results of logical design and physical design, writes and debuts the application program, organizes the data into the database, and carries out the trial run. For example, using SQL statements to create databases and data tables.")]),e._v(" "),a("h6",{attrs:{id:"_6-in-the-database-operation-and-maintenance-phase-the-database-application-system-is-formally-put-into-operation-and-some-maintenance-adjustment-backup-upgrade-and-other-work-are-constantly-carried-out-during-the-operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-in-the-database-operation-and-maintenance-phase-the-database-application-system-is-formally-put-into-operation-and-some-maintenance-adjustment-backup-upgrade-and-other-work-are-constantly-carried-out-during-the-operation"}},[e._v("#")]),e._v(" 6. In the database operation and maintenance phase, the database application system is formally put into operation, and some maintenance, adjustment, backup, upgrade and other work are constantly carried out during the operation.")]),e._v(" "),a("p",[e._v("Database design paradigm")]),e._v(" "),a("p",[e._v("Concept: Database design has a great impact on data storage performance and data operation. In order to avoid data redundancy caused by non-standard data, as well as abnormal insertion, deletion and update operations, it is necessary to meet certain normalization requirements. In order to normalize databases, database technologists have proposed various Normal forms.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Each column of the data table is an inseparable basic data item, and there can be no multiple values in the same column, that is, there can be no duplicate fields in the data table, and a field can not have multiple values.\nThe first normal form follows "),a("b",[e._v(" atomicity ")]),e._v(", and the fields are not subdivided.")])]),e._v(" "),a("li",[a("p",[e._v("The field of the entity depends entirely on the primary key and cannot depend only on a part of the primary key (for composite primary keys).\nThe second normal form follows "),a("b",[e._v(" uniqueness ")]),e._v(", and the non-primary key fields are completely dependent on the primary key.")])]),e._v(" "),a("li",[a("p",[e._v("Each column of data in a data table is directly related to the primary key, but not indirectly related.\nThe third normal form is that non-primary key fields cannot depend on each other.")])])]),e._v(" "),a("h4",{attrs:{id:"relational-algebra"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relational-algebra"}},[e._v("#")]),e._v(" relational algebra")]),e._v(" "),a("p",[e._v("I. Set operator\nCartesian product, union, intersection, difference\nSecond, relational operators\nDivide, select, project, connect")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Tip")]),e._v(" "),a("p",[e._v("Prompt content")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Indicates a warning")]),e._v(" "),a("p",[e._v("Warning content")])]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("Danger")]),e._v(" "),a("p",[e._v("Dangerous content")])]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Details")]),e._v(" "),a("p",[e._v("details")])])])}),[],!1,null,null,null);a.default=n.exports}}]);