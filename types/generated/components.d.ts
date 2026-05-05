import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBlocoDeImagem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_bloco_de_imagems';
  info: {
    displayName: 'bloco-de-imagem';
    icon: 'picture';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface BlocksBlocoDeTexto extends Struct.ComponentSchema {
  collectionName: 'components_blocks_bloco_de_textos';
  info: {
    displayName: 'bloco-de-texto';
    icon: 'italic';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.bloco-de-imagem': BlocksBlocoDeImagem;
      'blocks.bloco-de-texto': BlocksBlocoDeTexto;
    }
  }
}
