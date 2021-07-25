FROM public.ecr.aws/c3u1j1w8/base-images:node-alpine AS base
LABEL maintainer=yevhen_horbunkov@epam.com
WORKDIR /usr/src/app
COPY ./ ./
RUN rm -rf ./packages/client
RUN yarn && yarn build
RUN rm -rf ./node_modules
RUN yarn --production

FROM public.ecr.aws/c3u1j1w8/base-images:node-alpine
WORKDIR /usr/src/app
COPY --from=base /usr/src/app/dist/ ./packages
COPY --from=base /usr/src/app/node_modules/ ./node_modules
EXPOSE 9000
CMD node ./packages/server/src/index.js


