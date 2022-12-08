import { css, Global } from "@emotion/react";

export const GlobalStyles = (
  <Global
    styles={css`
      html,
      body,
      div,
      span,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      a,
      address,
      em,
      img,
      q,
      s,
      small,
      strong,
      sub,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font: inherit;
        -webkit-appearance: none;
      }
      html {
        width: 100%;
        overflow: hidden;
        overflow-y: auto;
        font-family: "Pretendard Variable", sans-serif;
        @supports (-webkit-touch-callout: none) {
          min-height: -webkit-fill-available;
        }
      }
      body {
        user-select: none;
      }
      html,
      body,
      main,
      div,
      nav {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera*/
        }
      }
      button,
      a {
        cursor: pointer;
      }
      button {
        padding: 0;
        background-color: transparent;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      img {
        max-width: 100%;
        height: auto;
        /* 이미지 드래그 방지 */
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-user-drag: none;
      }
      ol,
      ul {
        list-style: none;
      }
      button,
      table,
      fieldset,
      input,
      textarea,
      select,
      iframe {
        border: 0;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      button,
      input,
      textarea,
      select,
      meter,
      progress {
        appearance: none;
      }
      b {
        font-weight: bold;
      }
      :lang(ko) {
        word-break: keep-all;
      }
      .ReactQueryDevtools {
        div,
        p,
        span,
        label {
          color: #ffffff;
        }
      }
    `}
  />
);
