.PHONY: start install install-client install-api lint lint-client lint-api
.DEFAULT_GOAL := start

override COLUMN_WIDTH=`tput cols`

override STAT_UPDATE_FT="%s%-9s`tput sgr0`%s%s%*s`tput sgr0`\n"
override PRNT_STATUS=printf ${STAT_UPDATE_FT} \
`tput setaf $(1)` "$(2):" "$(3)" `tput setaf $(1)` \
$$((${COLUMN_WIDTH} - $$(\
fold -w ${COLUMN_WIDTH} <(printf "%-9s %s" "$(2):" "$(3)") | tail -n1 | wc -m \
))) \
"<"#| fold -w ${COLUMN_WIDTH}

override PRNT_INFO=$(call PRNT_STATUS,4,info,$(1))
override PRNT_SUCCESS=$(call PRNT_STATUS,2,success,$(1))
override PRNT_ERROR=$(call PRNT_STATUS,1,error,$(1))
override PRNT_WARN=$(call PRNT_STATUS,3,warning,$(1))

# 0	Black
# 1	Red
# 2	Green
# 3	Yellow
# 4	Blue
# 5	Magenta
# 6	Cyan
# 7	White
# 8	Not used
# 9	Reset to default color

install: install-client install-api

install-client:
	@cd client; \
	npm i &>/dev/null

install-api:
	@cd api; \
	npm i &>/dev/null
	
lint: lint-client lint-api

lint-client:
	@cd client; \
	npm run lint

lint-api:
	@cd api; \
	npm run lint

start: install
	docker-compose up --build
