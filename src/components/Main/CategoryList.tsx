import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'

export type CategoryListProps = {
    selectedCategory: string
    categoryList: {
        // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자임을 나타내는 타입 표기 방법
        [key: string]: number
    }
}

const CategoryListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 768px;
    margin: 100px auto 0;
`

const CategoryList: FunctionComponent<CategoryListProps> = ({ selectedCategory, categoryList}) => {
    return (
        <CategoryListWrapper>
            {console.log(Object.entries(categoryList))}
            {Object.entries(categoryList).map(([name, count]) => (
                <div key={name}>
                    #{name}({count})
                </div>
            ))}
            </CategoryListWrapper>
    )
}

export default CategoryList
