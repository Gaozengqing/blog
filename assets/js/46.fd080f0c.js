(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{335:function(s,a,t){"use strict";t.r(a);var r=t(12),n=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[s._v("#")]),s._v(" 事务")]),s._v(" "),a("p",[s._v("MySQL事务是一种保证一系列数据库操作（比如更新、删除等）在一个单一的工作单元中的完整性。如果这一系列操作中的任意一个步骤失败，整个操作都可以回滚，以保证数据库的一致性。")]),s._v(" "),a("p",[s._v("特性： ACID，原子性，一致性，隔离性，持久性")]),s._v(" "),a("h3",{attrs:{id:"a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a"}},[s._v("#")]),s._v(" A")]),s._v(" "),a("p",[s._v("原子性指一个事务必须被视为一个不可分割的最小工作单元，只有事务中所有的数据库操作都执行成功，整个事务才算执行成功。事务中如果有任何一条SQL语句执行失败，已经执行成功的SQL语句也必须回滚。")]),s._v(" "),a("h3",{attrs:{id:"c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c"}},[s._v("#")]),s._v(" C")]),s._v(" "),a("p",[s._v("一致性指事务只能将数据库状态从一个一致性状态转变为另一个一致性状态。MySQL中的一致性主要由日志机制实现，通过日志记录数据库的所有变化，为事务恢复提供跟踪记录。")]),s._v(" "),a("h3",{attrs:{id:"i"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i"}},[s._v("#")]),s._v(" I")]),s._v(" "),a("p",[s._v("隔离性指一个事务在执行时不受其他事务的影响。隔离性保证了未完成事务的所有操作与数据库系统的隔离，直到事务完成为止，才能看到事务的执行结果。")]),s._v(" "),a("h3",{attrs:{id:"d"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#d"}},[s._v("#")]),s._v(" D")]),s._v(" "),a("p",[s._v("持久性指事务一旦提交，其对数据库中数据的修改就是永久性的。事务的持久性不能做到百分之百的持久，只能从事务本身的角度来保证持久性，如果遇到一些外部原因（例如硬盘损坏）导致数据库发生故障，所有提交的数据可能都会丢失。")]),s._v(" "),a("h2",{attrs:{id:"事务的开启"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务的开启"}},[s._v("#")]),s._v(" 事务的开启")]),s._v(" "),a("p",[s._v("默认情况下，用户执行的每一条SQL语句都会被当成单独的事务自动提交。如果想要将一组SQL语句作为一个事务，则需要显式地开启事务。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"事务的提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务的提交"}},[s._v("#")]),s._v(" 事务的提交")]),s._v(" "),a("p",[s._v("显式开启事务后，每一条SQL语句不再自动提交，用户需要手动提交，只有提交后其中的操作才会生效。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"事务回滚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务回滚"}},[s._v("#")]),s._v(" 事务回滚")]),s._v(" "),a("p",[s._v("如果不想提交当前事务，可以将事务取消（即回滚）。")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROLLBACK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"tip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tip"}},[s._v("#")]),s._v(" Tip")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("使用事务时的注意事项：\n"),a("strong",[s._v("ROLLBACK语句只能针对未提交的事务回滚")]),s._v("，已提交的事务不能回滚。\n"),a("strong",[s._v("当执行COMMIT语句或ROLLBACK语句后，当前事务就会自动结束")]),s._v("。"),a("strong",[s._v("如果开启事务后直到MySQL会话结束时都没有提交事务，事务会自动回滚。")]),s._v(" "),a("strong",[s._v("事务不允许嵌套")]),s._v("，如果执行START TRANSACTION语句之前，上一个事务还没有提交，此时执行START TRANSACTION语句会隐式执行上一个事务的提交操作。\n事务主要是针对数据表中数据，不包括创建或删除数据库、数据表，修改表结构等操作，而且执行这类操作时会隐式地提交事务。\n"),a("strong",[s._v("InnoDB存储引擎支持事务")]),s._v("，"),a("strong",[s._v("MyISAM存储引擎不支持事务")]),s._v("。MyISAM存储引擎的数据表，无论事务是否提交，对数据的操作都会立即生效，不能回滚。\n使用START TRANSACTION的别名BEGIN或BEGIN WORK显式地开启一个事务。由于BEGIN与存储过程中的BEGIN…END冲突，因此"),a("strong",[s._v("不推荐使用BEGIN。")])]),s._v(" "),a("hr"),s._v(" "),a("h3",{attrs:{id:"事物的自动提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事物的自动提交"}},[s._v("#")]),s._v(" 事物的自动提交")]),s._v(" "),a("p",[s._v("用户执行的每一条SQL语句都会被当成单独的事务自动提交。\n如果关闭事务的自动提交，事务只能手动提交，通过更改AUTOCOMMIT的值设置事务的提交方式。\n"),a("strong",[s._v("AUTOCOMMIT的值设置为1表示开启事务自动提交，设置为0表示关闭事务自动提交。")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("查看当前会话的AUTOCOMMIT值：\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" @"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@AUTOCOMMIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n关闭当前会话的事务自动提交：\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" AUTOCOMMIT"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 关闭后需要手动提交事务，如果未提交事务直接终止MySQL会话，")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 事务自动回滚。")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"事务的保持点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务的保持点"}},[s._v("#")]),s._v(" 事务的保持点")]),s._v(" "),a("p",[s._v("回滚事务后，事务内的所有操作将都被撤销，如果只希望撤销事务内的一部分操作，可以在事务中设置一个保存点。\n设置保存点后，可以将事务回滚到指定的保存点。如果不再需要保存点，可以将保存点删除。")]),s._v(" "),a("p",[a("strong",[s._v("在事务中设置保存点的语句")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SAVEPOINT")]),s._v(" 保存点名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("将事务回滚至保存点的语句")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROLLBACK")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SAVEPOINT")]),s._v(" 保存点名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("删除保存点的语句")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RELEASE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SAVEPOINT")]),s._v(" 保存点名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"tip-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tip-2"}},[s._v("#")]),s._v(" Tip")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("一个事务中可以创建多个保存点，在提交事务后，事务中的保存点就会被删除。\n当回滚到某个保存点后，该保存点之后创建的保存点也会被删除。")]),s._v(" "),a("hr")])}),[],!1,null,null,null);a.default=n.exports}}]);